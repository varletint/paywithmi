import React from "react";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
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
  FaArrowRight,
  FaCopyright,
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaMoneyBill,
  FaMoneyBillAlt,
  FaMoneyBillWave,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { BiCopyright, BiLogoTwitter } from "react-icons/bi";

export default function Home() {
  return (
    <div className='py-'>
      <nav className=' py-3  fixed left-1/2 right-1/2 top-0 '>
        <Header />
      </nav>

      <HeroSection />
      <Benefits />
      <PriceSection />
      <FooterSection />
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
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#prices'>Price</a>
      </li>
      <li>
        <a href='#verify'>Verify</a>
      </li>
      <li>
        <a href='#exchange'>Exchange</a>
      </li>
      <li>
        <a href='#contact'>Contact</a>
      </li>
    </ul>
  );
};
const HeroSection = () => {
  return (
    <section className='mt-28 h-[700px] px-16  ' id='home'>
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
      className='bg-[#d5e0db33] [#e7f1ecdc] mt-10 h-[700px] flex
    flex-col justify-center px-16 '
      id='prices'>
      <div className=''>
        <h1 className=' text-[2rem] text-center font-semibold'>
          Price that works for you
        </h1>
      </div>
      <div
        className='flex 
      items-center lg:justify-center justify-between
  gap-[2rem] mt-16  py-3 px-2 overflow-auto lg:gap-[5rem]'>
        <PriceCard
          billName={"Project Manual"}
          billPrice={"4,100"}
          billDes={"Get your Project Manual Book with zero-hassle"}
          benefit1={"Project Manual"}
          icon1={<HiOutlineCheckCircle />}
          perPay='/Per student/ Per book'
        />
        <PriceCard
          billName={"Field Trip Card"}
          billDes={"Pay for your Field Trip at your finger tips"}
          billPrice={"30,200"}
          benefit1={"Field Trip"}
          icon1={<HiOutlineCheckCircle />}
          perPay={"/Per student"}
        />

        <PriceCard
          billName={"Books and Manuals Card"}
          billPrice={"2,100"}
          billDes={"Perfect for paying Practical Manual and Books"}
          benefit1={"Manual for CSC 201"}
          benefit2={"Manual for CSC 204"}
          benefit3={"Manual for CSC 301"}
          benefit4={"Manual for CSC 104"}
          icon1={<HiOutlineCheckCircle />}
          icon2={<HiOutlineCheckCircle />}
          icon3={<HiOutlineCheckCircle />}
          icon4={<HiOutlineCheckCircle />}
          perPay={"/Per student/ Per book"}
          slug={"2100"}
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
  icon1,
  icon2,
  icon3,
  icon4,
  perPay,
  slug,
}) => {
  return (
    <div
      className=' bg-[#ffffff65] h-[380px] w-[280px] 
    rounded-3xl shadow-md py-7 px-5 flex-shrink-0
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
          <p className=' font-medium text-[.78rem] text-[#3e5a4e]'>{perPay}</p>
        </div>
        <div
          className=' bg-[#3e5a4e] py-2 font-semibold 
          text-white text-center mt-5 shadow-md
        rounded-xl'>
          <Link to={`/pay/${slug}`} className='w-full h-full'>
            Get your Card
          </Link>
        </div>
        <div className=' mt-5'>
          <ul
            className=' text-xs flex flex-col gap-2 font-medium
          text-[#3e5a4e] '>
            <li
              className='flex items-center gap-1
            '>
              {icon1} {benefit1}
            </li>
            <li
              className='flex items-center gap-1
            '>
              {icon2}
              {benefit2}
            </li>
            <li
              className='flex items-center gap-1
            '>
              {icon3}
              {benefit3}
            </li>
            <li
              className='flex items-center gap-1
            '>
              {icon4}
              {benefit4}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const FooterSection = () => {
  return (
    <section
      className='bg-[#010702] flex flex-col gap-[3rem] text-white 
      px-[10rem] py-[5rem]'
      id='contact'>
      <div className='flex justify-between'>
        <div className=' flex flex-col gap-3 '>
          <h1 className=' uppercase font-bold text-xs text-[#b2e0cc]'>
            Contact us
          </h1>
          <h1 className=' capitalize w-[200px] text-2xl font-semibold'>
            Let's discuss your Payments with us
          </h1>
          <div
            className='bg-[#3e5a4e] text-center mt-2 py-3 
          rounded-xl flex justify-center items-center gap-0.5 font-semibold '>
            <a href='/#prices'> Try it now</a>
            <HiArrowRight />
          </div>
          <h1 className=' uppercase font-bold mt-5 text-xs text-[#b2e0cc]'>
            Email us
          </h1>
          <div
            className='bg-[#b0c0b92c] text-center  py-3 
          rounded-xl flex justify-center items-center border-[1px]
          border-[#3e5a4e]'>
            varletint@gmail.com
          </div>
        </div>
        <div className='flex gap-[8rem] flex-row-reverse'>
          <div className=''>
            <h1 className=' text-sm font-semibold text-[#b2e0cc]'>
              Information
            </h1>
            <ul className='mt-3'>
              <li>
                <a href='#home'>......</a>
              </li>
              <li>
                <a href='#prices'>......</a>
              </li>
              <li>
                <a href='#verify'>......</a>
              </li>
              <li>
                <a href='#Exchange'>..........</a>
              </li>
            </ul>
          </div>
          <div className=''>
            <h1 className=' text-sm font-semibold text-[#b2e0cc]'>
              Quick links
            </h1>
            <ul className='mt-3'>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#prices'>Price</a>
              </li>
              <li>
                <a href='#verify'>Verification</a>
              </li>
              <li>
                <a href='#Exchange'>Exchange</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-1 w-full bg-white h-0.5 mt-5'> </div>
      <div className=' flex justify-between'>
        <p className='flex justify-center capitalize text-sm items-center'>
          <BiCopyright /> VARLETINT {new Date().getFullYear()}.{}
          <span className=' uppercase'> all rights reserved</span>
        </p>
        <div className='flex gap-5'>
          <a href='#' className='w-5'>
            <FaGithub size={"25"} />
          </a>
          <a href='#' className='w-5'>
            <FaTwitter size={"25"} />
          </a>
          <a href='#' className='w-5'>
            <FaWhatsapp size={"25"} />
          </a>
          <a href='#' className='w-5'>
            <FaFacebookF size={"25"} />
          </a>
        </div>
      </div>
    </section>
  );
};
