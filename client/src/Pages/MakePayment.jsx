import { useState } from "react";

export default function MakePayment() {
  const [formData, setFormData] = useState({
    email: "",
    amount: "",
  });

  console.log(formData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.paystack.co/transaction/initialize",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer sk_test_1d3f0d7cd61c3a8476b995c7b0597daa67eb2d2f",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            amount: parseFloat(formData.amount) * 100, // Convert to kobo/cents
          }),
        }
      );

      const data = await response.json();

      if (data.status) {
        // Redirect to Paystack checkout page
        window.location.href = data.data.authorization_url;
      } else {
        setError("Payment initialization failed. Please try again.");
      }
    } catch (err) {
      // setError("An error occurred. Please try again later.");
      console.error("Payment error:", err);
    }
  };

  return (
    <>
      <div>
        <h1>Make your Payment here</h1>
        <h5>Payment Description</h5>
      </div>
      <form onSubmit={handelSubmit}>
        <div>
          <div className='input-div'>
            <label htmlFor='matricNo'>Matric No:</label>
            <input
              id='email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='input-div'>
            <label htmlFor='Amount'>Amount:</label>
            <input
              type='number'
              id='amount'
              name='amount'
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>
          <h4>
            <button>Submit</button>
          </h4>
        </div>
      </form>
    </>
  );
}
