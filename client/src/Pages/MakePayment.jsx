import { useState } from "react";
import { useParams } from "react-router-dom";

export default function MakePayment({ onClose }) {
  const [paymentDetails, setPaymentDetails] = useState("");
  const priceParam = useParams();
  console.log(priceParam.price);
  const itemName = "Manual 108";
  const [formData, setFormData] = useState({
    // matricNo: "",
    firstname: itemName,
    lastname: "",
    email: "",
    amount: "2200",
  });
  const back = "<";

  // console.log(formData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!priceParam) return;

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
            // matricNo: formData.matricNo,
            // firstname: formData.firstname,
            // lastname: formData.lastname,
            email: formData.email + "@gmail.com",
            amount: parseFloat(priceParam.price) * 100, // Convert to kobo/cents
          }),
        }
      );

      const data = await response.json();

      if (data.status) {
        // Redirect to Paystack checkout page
        // setPaymentDetails(data.data.authorization_url);
        window.location.href = data.data.authorization_url;
        // console.log(data);
      } else {
        // setError("Payment initialization failed. Please try again.");
      }
    } catch (err) {
      // setError("An error occurred. Please try again later.");
      console.error("Payment error:", err);
    }
  };

  return (
    <div
      className='  max-w-[30rem] min-h-[90vh] 
      m-auto flex  justify-center
      items-center flex-col
      '>
      <div
        className=' bg-[#fff] w-full  py-12 px-4
      sm:rounded-[1rem] shadow-md'>
        <div className=' '>
          <h1 className=' font-semibold text-xl text-center text-[#333]'>
            A Card of
            <span className=' font-bold text-[#28a02e] '>
              {" "}
              NGN {priceParam.price}
            </span>
          </h1>
        </div>
        <form onSubmit={handelSubmit} className='mt-5 w-full '>
          <div
            className='flex flex-col mt-20 gap-5 max-w-  
        m-auto '>
            {/* <div className='input-div '>
               <label htmlFor='matricNo'>Matric No:</label> 
              <input
                id='matricNo'
                name='matricNo'
                type='text'
                value={formData.matricNo}
                onChange={handleInputChange}
                placeholder='Matric no...'
                className='h-[2.9rem] tracking-wide
              w-full border-[0.12rem] border-[#333] rounded-xl px-5'
                required
              />
          </div> 
            */}
            <div className='input-div '>
              {/* <label htmlFor='matricNo'>Matric No:</label> */}
              <input
                id='email'
                name='email'
                type='text'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Matric No:'
                className='h-[2.9rem] tracking-wide
              w-full border-[0.12rem] border-[#333] rounded-xl px-5'
                required
              />
            </div>
            <div className='input-div'>
              {/* <label htmlFor='Amount'>Amount:</label> */}
              {/* <input
                type='text'
                id='lastname'
                name='lastname'
                value={formData.lastname}
                onChange={handleInputChange}
                placeholder='Full name'
                className='h-[2.9rem] tracking-wide
              w-full border-[0.12rem] border-[#333] rounded-xl px-5'
                required
              /> */}
            </div>
            <h4>
              <div className='button-section flex justify-between gap-3'>
                <span
                  onClick={onClose}
                  className='w-full  border-[0.12rem] border-[#333] 
                  text-[#333] font-semibold
            py-2.5 rounded-xl text-center cursor-pointer'>
                  Back
                </span>
                <button
                  className='w-full bg-[#333] text-white font-semibold
            py-2 rounded-xl outline-none border-none hover:bg-[#229]
            transition-all duration-700'>
                  Pay
                </button>
              </div>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
}
