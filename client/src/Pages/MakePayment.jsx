import { useState } from "react";

export default function MakePayment() {
  const [formData, setFormData] = useState({
    matricNo: "",
    email: "",
    amount: "3000",
    fullname: "",
  });
  const back = "<";

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
            matricNo: formData.matricNo,
            fullname: formData.fullname,
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
        // setError("Payment initialization failed. Please try again.");
      }
    } catch (err) {
      // setError("An error occurred. Please try again later.");
      console.error("Payment error:", err);
    }
  };

  return (
    <div
      className=' sm:max-w-[20rem]  max-w-[22rem] min-h-[90vh] 
      m-auto flex  justify-center
      items-center flex-col
      '>
      <div
        className=' bg-[#f9f9f9b0] w-full  py-12 px-2
      rounded-[1rem] shadow-md'>
        <div className=' flex  justify-between w-full px-3 items-center b'>
          <h1 className=' font-semibold text-left w-[8rem] text-[#333]'>
            Payment for 311 Logbook
          </h1>
          <h1
            className='
         font-bold text-lg '>
            <span className=' line-through decoration-double'>N</span>3,000
          </h1>
        </div>
        <form onSubmit={handelSubmit} className='mt-5 w-full '>
          <div
            className='flex flex-col gap-5 max-w-  
        m-auto'>
            <div className='input-div '>
              {/* <label htmlFor='matricNo'>Matric No:</label> */}
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

            <div className='input-div'>
              {/* <label htmlFor='Amount'>Amount:</label> */}
              <input
                type='text'
                id='fullname'
                name='fullname'
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder='Fullname'
                className='h-[2.9rem] tracking-wide
              w-full border-[0.12rem] border-[#333] rounded-xl px-5'
                required
              />
            </div>
            <div className='input-div '>
              {/* <label htmlFor='matricNo'>Matric No:</label> */}
              <input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Email...'
                className='h-[2.9rem] tracking-wide
              w-full border-[0.12rem] border-[#333] rounded-xl px-5'
                required
              />
            </div>
            <h4>
              <div className='button-section flex justify-between gap-10'>
                <button
                  className='w-[10rem] border-[0.12rem] border-[#333] text-[#333] font-semibold
            py-2 rounded-xl '>
                  Back
                </button>
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
