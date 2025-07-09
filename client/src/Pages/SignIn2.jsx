import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});

  const loadFormData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  // Handle submit function
  const handleSubmit = async (e) => {
    e.preventDafault;

    const res = fetch("api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };
  return (
    <div className=' min-h-screen max-w-3xl mx-auto'>
      {/* ADMIN */}

      <div className=' mt-10'>
        <h1 className=' text-center  text-xl font-bold'>Pay with Me</h1>
        <h1 className='text-center mt-1 font-semibold text-lg'>
          Enter your login details to Sign In
        </h1>
      </div>
      <div
        className='w-full flex
      justify-center mt-5 '>
        <form
          onSubmit={handleSubmit}
          className=' bg-[#fafafae8] py-5 flex flex-col w-[30rem] 
        p-3 gap-5 rounded-2xl shadow '>
          <div className='input flex flex-col gap-2  '>
            <label> Email</label>
            <input
              className='bg-white shadow'
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              onChange={loadFormData}
            />
          </div>
          <div className='input flex flex-col gap-3'>
            <label> Password</label>
            <input
              className='bg-white shadow'
              type='text'
              name='password'
              id='password'
              placeholder='Enter your password'
              onChange={loadFormData}
            />
          </div>
          <button
            className=' bg-[#333] p-[10px] text-white font-semibold
          rounded-lg mt-4 shadow-md transition-all  -700 hover:bg-[#222]'>
            Sign In
          </button>

          <div className='w-full flex justify-center gap-5 font-semibold'>
            <p>Don't have an account?</p>
            <Link to='/sign-up' className='text-blue-700 cursor-pointer'>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
