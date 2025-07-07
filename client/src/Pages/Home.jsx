import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiCash,
  HiCurrencyDollar,
  HiDocumentText,
  HiMenu,
  HiMenuAlt1,
  HiMenuAlt2,
  HiMenuAlt3,
  HiMenuAlt4,
  HiOutlineCash,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineMenuAlt1,
  HiOutlineMenuAlt4,
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
  FaHamburger,
  FaMoneyBill,
  FaMoneyBillAlt,
  FaMoneyBillWave,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { BiCopyright, BiLogoTwitter } from "react-icons/bi";
import HamburgerMenu from "../compponents/HamburgerMenu";

export default function Home() {
  return (
    <div className='py-'>
      {/* <nav
           className=' py  [sm:fixed relative left-[-5%] sm:left-1/2 sm:right-1/2 top-0]
       z-[101] transition-all duration-500 ease-in-out' >
      </nav> */}
      <Header />

      <HeroSection />
      <Benefits />
      <PriceSection />
      <FooterSection />
    </div>
  );
}

const Header = () => {
  const [open, setOpen] = useState("");
  const toggleMenu = () => {
    alert(1);
  };
  return (
    <>
      <nav
        className='  min-h-16
  sm:flex items-center justify-between desktop-nav hidden'>
        <div
          className=' flex justify-between w-full bg-white min-h-[10vh] 
        shadow items-center border-b- z-[101] px-6
         lg:px-[10rem] md:px-[3rem]'>
          <div
            //   className='logo font-semibold sm:text-3xl text-2xl bg-white sm:py-0
            // sm:px-0 px-6 py-2  sm:shadow-none shadow rounded-2xl'
            className='text-3xl font-semibold'>
            Logo
          </div>
          <div className='nav-links  sm:block hidden '>
            <NavItems />
          </div>
        </div>
      </nav>
      <nav className='mobile-nav sm:hidden z-[10000] shadow-md '>
        <div
          className=' flex justify-between w-full bg-white min-h-[10vh] 
        shadow items-center border-b- z-[101111] px-6
         lg:px-[10rem] md:px-[3rem]'>
          <div className='text-3xl font-semibold'>Logo</div>
          <div className='nav-links  relative inline-block '>
            {/* <HiMenu size={30} onClick={() => setOpen("open")} /> */}
            {/* <MobileNavItems /> */}
            <HamburgerMenu />
            <div
              className={`list-none absolute z-[102] right-0 top-[100%]
      w-fit bg-white overflow-hidden transition-all 
      shadow-md rounded-xl hidden flex-col px-[2rem] gap-[1.5rem] py-6
      font-medium text-[1.1rem] 
      duration-[1s] ease-in-out menu-links ${open}
     `}>
              <li>
                <a
                  href='#home '
                  //   className='{sm:px-0 px-4 bg-white/ rounded-2xl
                  // sm:shadow-none shadow py-1}'
                  className='  '
                  onClick={() => setOpen("")}>
                  Home
                </a>
              </li>
              <li>
                <a href='#prices' className='' onClick={() => setOpen("")}>
                  Price
                </a>
              </li>
              <li>
                <a href='#verify' className='' onClick={() => setOpen("")}>
                  Verify
                </a>
              </li>
              <li>
                <a href='#exchange' className='' onClick={() => setOpen("")}>
                  Exchange
                </a>
              </li>
              <li>
                <a href='#contact' className='' onClick={() => setOpen("")}>
                  Contact
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const MobileNavItems = ({ open }) => {
  return (
    <div
      className={`list-none absolute z-[102] right-0 top-[100%]
      w-fit bg-white overflow-hidden transition-all 
      shadow-md rounded-xl hidden flex-col px-[2rem] gap-[1.5rem] py-6
      font-medium text-[1.1rem] max-h-0
      duration-[1s] ease-in-out menu-links ${open}
     `}>
      <li>
        <a
          href='#home '
          //   className='{sm:px-0 px-4 bg-white/ rounded-2xl
          // sm:shadow-none shadow py-1}'
          className=' '>
          Home
        </a>
      </li>
      <li>
        <a href='#prices' className=''>
          Price
        </a>
      </li>
      <li>
        <a href='#verify' className=''>
          Verify
        </a>
      </li>
      <li>
        <a href='#exchange' className=''>
          Exchange
        </a>
      </li>
      <li>
        <a href='#contact' className=''>
          Contact
        </a>
      </li>
    </div>
  );
};
const NavItems = () => {
  return (
    <ul
      className=' list-none flex sm:flex-row flex-col sm:gap-3.5   
     gap-3 font-semibold text-[#3e5a4e] hdden'>
      <li>
        <a
          href='#home '
          //   className='{sm:px-0 px-4 bg-white/ rounded-2xl
          // sm:shadow-none shadow py-1}'
          className=''>
          Home
        </a>
      </li>
      <li>
        <a href='#prices' className=''>
          Price
        </a>
      </li>
      <li>
        <a href='#verify' className=''>
          Verify
        </a>
      </li>
      <li>
        <a href='#exchange' className=''>
          Exchange
        </a>
      </li>
      <li>
        <a href='#contact' className=''>
          Contact
        </a>
      </li>
    </ul>
  );
};
const HeroSection = () => {
  return (
    <section
      className='mt- h-[700px] lg:px-16 e lg:max-w-[100rem]  bg-geen-400 mx-auto  
    max- '
      id='home'>
      <div
        className='lg:flex-row flex items-center flex-col-reverse
      lg:justify-between    bg-re-500 lg:w--[90rem] relative '>
        <div className=' flex items-center lg:relative absolute left-0 bottom-[5%] z-[100]'>
          <div
            className='her-details px-2  py-4
            lg:w-[30rem] sm:w-[100%] bgyellow-300 
            flex-col sm:ml-6 md:ml-0 sm:bg-[#fff0] w-[22rem]
        '>
            <div className=''>
              <h1
                className='sm:text-[4rem] 
              text-[3rem] sm:w-[30rem] w-full text-[#fff]
               font-bold leading-none lg:text-[#333]'>
                Reach Your Payment Goals with Us
              </h1>
              <div className='details  mt-5 leading-relaxed w-[21rem]'>
                <p
                  className=' text-[#ffffff] font-medium 
                lg:text-[#123]'>
                  Unlock the full payment of your department transactions with
                  us the cutting-edge solution for a your stream line
                  Departmental expenses.
                </p>
              </div>
            </div>
            <div className=' items-center flex gap-5 mt-4'>
              <Link
                className='bg-[#3e5a4e] backdrop-blur-lg border 
                border-[#3e5a4e]/30

                [#3e5a4e] px-10 text-white
              font-semibold py-3 rounded'>
                Get to Know us
              </Link>
              <Link
                className='bg-[#0f472f73]/ backdrop-blur-lg border 
                border-[#3e5a4e]/30

                [#3e5a4e] px-10 text-[#064127]
              font-semibold py-3 rounded hidden lg:block'>
                Get to Know us
              </Link>
            </div>

            {/* <div className='w-ful sm:flex-row flex  flex-col gap-5 mt-5'>
              <Link
                className='bg-[#3e5a4e] px-8 py-2.5 text-white 
              
              font-semibold rounded-xl shadow text-nowrap'>
                Get to Know About Us
              </Link>
              <div
                className='border hidden md:block border-[#3e5a4e] px-8 py-2.5 text-[#3e5a4e] 
              text-nowrap 
              font-semibold rounded-xl shadow'>
                Explore All Features
              </div>
            </div> */}
          </div>
        </div>
        <div className=' lg:w-[40%] w-full   h-[700px] relative  '>
          <img
            className=' w-[100%]  h-full lg:object-cover object-cover'
            src={Imghand}
            alt='image showing a hand holding a phone'
          />
          <div className='lg:hidden  absolute black-div'></div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  return (
    <section
      className='mt-10 px-3 max-w-[60rem] mx-auto mb-10

  '>
      <div className=' grid'>
        <h1 className=' text-center font-semibold sm:text-3xl text-2xl'>
          Benefits you get in single tool
        </h1>
        <div className='md:grid-cols-4 sm:grid-cols-2 px-4 grid-cols-1 grid gap-[1.5rem] mt-10 items-center justify-center'>
          <div
            className='bg-[#d5e0db33] col-span-1  h-[150px] items-center
            flex flex-col justify-center gap-3  rounded-xl 
          shadow-md flex-shrink-0'>
            <div className=' items-center'>
              <HiOutlineCurrencyDollar className='w-[2rem] h-[2rem] text-[#3e5a4e] ' />
            </div>
            <p className='text-[#3e5a4e] font-semibold'>Payments</p>
          </div>
          <div
            className='bg-[#d5e0db33] col-span-1 h-[150px] items-center
            flex flex-col justify-center gap-3  rounded-xl 
          shadow-md flex-shrink-0'>
            <div className=' items-center'>
              <HiOutlineCash className='w-[2rem] h-[2rem] text-[#3e5a4e] ' />
            </div>
            <p className='text-[#3e5a4e] font-semibold'>Cashout</p>
          </div>
          <div
            className='bg-[#d5e0db33] col-span-1 h-[150px] items-center
            flex flex-col justify-center gap-3  rounded-xl 
          shadow-md flex-shrink-0'>
            <div className=' items-center'>
              <HiTrendingUp className='w-[2rem] h-[2rem] text-[#3e5a4e] ' />
            </div>
            <p className='text-[#3e5a4e] font-semibold'>Grow</p>
          </div>
          <div
            className='bg-[#d5e0db34] col-span-1 h-[150px] items-center
            flex flex-col justify-center gap-3  rounded-xl 
          shadow-md flex-shrink-0'>
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
          slug={"4100"}
          billDes={"Get your Project Manual Book with zero-hassle"}
          benefit1={"Project Manual"}
          icon1={<HiOutlineCheckCircle />}
          perPay='/Per student/ Per book'
        />
        <PriceCard
          billName={"Field Trip Card"}
          billDes={"Pay for your Field Trip at your finger tips"}
          billPrice={"30,200"}
          slug={"30200"}
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
      className=' bg-[#ffffff65] border border-[#0f380211] h-[380px] w-[280px] 
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
      sm:px-[5rem] lg:px[10rem] md:px-[5rem] px-[2rem] py-[5rem] '
      id='contact'>
      <div className='flex flex-col-reverse sm:flex-row justify-between '>
        <div className=' flex flex-col gap-3 sm:mt-0 mt-10 '>
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
        <div
          className='flex sm:gap-[8rem] gap-[1rem] 
        justify-between sm:justify-normal flex-row-reverse'>
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
      <div className=' flex flex-col sm:flex-row sm:justify-between justify-center'>
        <p className='flex justify-center uppercase text-xs items-center text-nowrap'>
          <BiCopyright /> varletint {new Date().getFullYear()}.{}
          <span className=' uppercase'> all rights reserved</span>
        </p>
        <div className='flex gap-5 justify-center sm:mt-0 mt-4'>
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

const ExchangeSection = () => {};
const VeriyfSection = () => {};
