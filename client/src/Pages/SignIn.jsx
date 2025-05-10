import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <div className='h-[100vh]'>
      <div
        className='flex max-w-[36rem] justify-center
         h-full flex-col mx-auto
       '>
        <div className=''>
          <h3 className='text-center sm:text-3xl mb-5 text-2xl font-bold'>
            Login Page
          </h3>
        </div>
        <div className=''>
          <form className='flex flex-col gap-2 p-2 px-3 sm:px-[3rem]'>
            <div className=''>
              <label className=' font-semibold text-[#687a72]'>Email</label>
              <div
                className=' w-full mt-1.5 bg-[#ddebe0] flex 
              gap-3 items-center p-2 py-3  shadow rounded-lg'>
                <HiOutlineMail size={23} className=' text-[#a1998a]' />
                <input
                  type='email '
                  id='email'
                  className='w-full text-[#a1998a] border-none bg-transparent 
            placeholder:text-[#a1998a] placeholder:font-medium
          focus:outline-none'
                  placeholder='Email'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className=''>
              <label className=' font-semibold text-[#687a72]'>Password</label>
              <div
                className=' w-full mt-1.5 bg-[#ddebe0] flex 
              gap-3 items-center p-2 py-3  shadow rounded-lg'>
                <HiOutlineLockClosed
                  size={23}
                  className=' 
                text-[#8aa197]'
                />
                <input
                  type='text '
                  className='w-full border-none bg-transparent
                  text-[#a1998a] 
            placeholder:text-[#a1998a] placeholder:font-medium
          focus:outline-none'
                  placeholder='Password'
                  id='password'
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              className='bg-[#0d9488] p-2.5 mt-6 
            text-white rounded-lg font-medium shadow'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
