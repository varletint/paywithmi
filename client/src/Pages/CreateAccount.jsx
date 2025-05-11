import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlineUser,
  HiUser,
} from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInSuccess,
  signInStart,
} from "../redux/user/userSlice";

export default function CreateAccount() {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  document.title = "Login page";

  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Fields cannot be empty"));
    }

    try {
      setIsLoading(true);
      dispatch(signInStart());

      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setIsLoading(false);
        return dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        setIsLoading(false);
        dispatch(signInSuccess(data));
        navigate(`/dashboard`);
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='h-[100vh]'>
      <div
        className='flex max-w-[36rem] justify-center
         h-full flex-col mx-auto
       '>
        <div className=''>
          <h3 className='text-center sm:text-3xl mb-[1.25rem] text-2xl font-bold'>
            Create Account
          </h3>
        </div>
        <div className=''>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-2 p-2 px-3 sm:px-[3rem]'>
            <div className=''>
              <label className=' font-semibold text-[#687a72]'>Username</label>
              <div
                className=' w-full mt-1.5 bg-[#ddebe0] flex 
              gap-3 items-center p-2 py-3  shadow rounded-lg'>
                <HiOutlineUser size={23} className=' text-[#a1998a]' />
                <input
                  type='text '
                  id='username'
                  className='w-full text-[#a1998a] border-none bg-transparent 
            placeholder:text-[#a1998a] placeholder:font-medium
          focus:outline-none'
                  placeholder='Username'
                  onChange={handleChange}
                />
              </div>
            </div>
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
            text-white rounded-lg font-medium shadow'
              type='submit'
              disabled={isLoading}>
              {isLoading ? <span>Loading</span> : "  Create Account"}
            </button>
          </form>
          {errorMessage && (
            <p
              className='mt-2 text-center p-3 
              text-red-600 font-medium text-sm
              '>
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
