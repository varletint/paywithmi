import React from "react";
import { Link } from "react-router-dom";
import {
  HiCash,
  HiCurrencyDollar,
  HiDocumentText,
  HiOutlineCash,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiSwitchHorizontal,
  HiTicket,
  HiTrendingUp,
} from "react-icons/hi";

import Imghand from "../assets/images/file_00000000527c62308bc277ae2a95862d.png";
import {
  FaAddressBook,
  FaMoneyBill,
  FaMoneyBillAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className='py-'>
      <nav className=' py-3  fixed left-1/2 right-1/2 top-0 '>
        <Header />
      </nav>

      <HeroSection />
      <Benefits />
      <PriceSection />
    </div>
  );
}

const Header = () => {
  return (
    <div
      className='  min-h-16
  flex items-center justify-center '>
      <div
        className=' bg-white px-9 py-3 flex items-center gap-[7rem]
      shadow rounded-2xl'>
        <div className='logo font-semibold text-2xl'>Logo</div>
        <div className='nav-links'>
          <NavItems />
        </div>
      </div>
    </div>
  );
};

const NavItems = () => {
  return (
    <ul className=' list-none flex gap-10 font-semibold text-[#3e5a4e]'>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/#'>Price</a>
      </li>
      <li>
        <a href='#'>Verify</a>
      </li>
      <li>
        <a href='#'>Exchange</a>
      </li>
      <li>
        <a href='#'>Contact</a>
      </li>
    </ul>
  );
};
const HeroSection = () => {
  return (
    <section className='mt-28 h-[700px] px-16  '>
      <div className='flex justify-between '>
        <div className=' flex items-center'>
          <div
            className='heroHeader  w-[30rem]
        '>
            <h1 className='text-[4rem] font-bold leading-none'>
              Reach Your Payment Goals with Us
            </h1>
            <div className='details  mt-5 leading-relaxed'>
              <p>
                Unlock the full payment of your department transactions with us
                the cutting-edge solution for a your stream line Departmental
                expenses.
              </p>
            </div>

            <div className='w-full flex gap-5 mt-5'>
              <div
                className='bg-[#3e5a4e] px-8 py-2.5 text-white 
              text-wrap 
              font-semibold rounded-xl shadow'>
                Get to Know About Us
              </div>
              <div
                className='border border-[#3e5a4e] px-8 py-2.5 text-[#3e5a4e] 
              text-wrap 
              font-semibold rounded-xl shadow'>
                Explore All Features
              </div>
            </div>
          </div>
        </div>
        <div className=' w-[35rem] h-[700px]  '>
          <img
            className=' w-full h-full object-cover rounded-3xl'
            src={Imghand}
            alt='image showing a hand holding a phone'
          />
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  return (
    <section
      className='mt-10 px-3

  '>
      <div className=''>
        <h1 className=' text-center font-semibold text-3xl '>
          Benefits you get in single tool
        </h1>
        <div className='flex gap-[1.5rem] mt-10 justify-center'>
          <div
            className='bg-[#d5e0db33] w-[150px] h-[150px] items-center
            flex flex-col justify-center gap-3  rounded-xl 
          shadow-sm'>
            <div className=' items-center'>
              <HiOutlineCurrencyDollar className='w-[2rem] h-[2rem] text-[#3e5a4e] ' />
            </div>
            <p className='text-[#3e5a4e] font-semibold'>Payments</p>
          </div>
          <div
            className='bg-[#d5e0db33] w-[150px] h-[150px] items-center
            flex flex-col justify-center gap-3  rounded-xl 
          shadow-sm'>
            <div className=' items-center'>
              <HiOutlineCash className='w-[2rem] h-[2rem] text-[#3e5a4e] ' />
            </div>
            <p className='text-[#3e5a4e] font-semibold'>Cashout</p>
          </div>
          <div
            className='bg-[#d5e0db33] w-[150px] h-[150px] items-center
            flex flex-col justify-center gap-3  rounded-xl 
          shadow-sm'>
            <div className=' items-center'>
              <HiTrendingUp className='w-[2rem] h-[2rem] text-[#3e5a4e] ' />
            </div>
            <p className='text-[#3e5a4e] font-semibold'>Grow</p>
          </div>
          <div
            className='bg-[#d5e0db34] w-[150px] h-[150px] items-center
            flex flex-col justify-center gap-3  rounded-xl 
          shadow-sm'>
            <div className=' items-center'>
              <HiSwitchHorizontal className='w-[2rem] h-[2rem] text-[#3e5a4e] ' />
            </div>
            <p className='text-[#3e5a4e] font-semibold'>Fast</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PriceSection = () => {
  return (
    <section
      className='bg-[#e7f1ecdc] mt-10 h-[700px] flex
    flex-col justify-center'
      id='prices'>
      <div className=''>
        <h1 className=' text-[2rem] text-center font-semibold'>
          Price that works for you
        </h1>
      </div>
      <div
        className='flex 
      items-center justify-center
  gap-[5rem] mt-16'>
        <PriceCard />
        <PriceCard />
        <PriceCard
          billName={"Books and Manuals Card"}
          billPrice={"2000"}
          billDes={"Perfect for paying Practical Manual and Books"}
          benefit1={"Manual for CSC 201"}
          benefit2={"Manual for CSC 204"}
          benefit3={"Manual for CSC 301"}
          benefit4={"Manual for CSC 104"}
          icon={<HiOutlineCheckCircle />}
        />
      </div>
    </section>
  );
};

const PriceCard = ({
  billName,
  billPrice,
  billDes,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
  icon,
}) => {
  return (
    <div
      className=' bg-[#d5e0db33] h-[380px] w-[280px] 
    rounded-3xl shadow-md py-7 px-5
    '>
      <div className=''>
        <div className=''>
          <h1 className=' font-semibold text-xl w-[140px] leading-6'>
            {billName}
          </h1>
          <p className=' mt-2 leading-5 text-[#3e5a4e]'>{billDes}</p>
        </div>
        <div className=' mt-5  flex items-center gap-'>
          <h1 className=' text-2xl font-bold'>₦{billPrice}</h1>
          <p className=' font-medium text-[.78rem] text-[#3e5a4e]'>
            /Per student/ Per book
          </p>
        </div>
        <div
          className=' bg-[#3e5a4e] py-2 font-semibold 
          text-white text-center mt-5 shadow-md
        rounded-xl'>
          <Link to={"#"} className='w-full h-full'>
            Get your Card
          </Link>
        </div>
        <div className=' mt-4'>
          <ul
            className=' text-xs flex flex-col gap-2 font-medium
          text-[#3e5a4e]'>
            <li
              className='flex items-center gap-1
            '>
              {icon} {benefit1}
            </li>
            <li
              className='flex items-center gap-1
            '>
              {icon}
              {benefit2}
            </li>
            <li
              className='flex items-center gap-1
            '>
              {icon}
              {benefit3}
            </li>
            <li
              className='flex items-center gap-1
            '>
              {icon}
              {benefit4}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
