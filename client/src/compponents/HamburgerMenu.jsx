import React, { useState } from "react";
import { motion } from "framer-motion";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative z-[9999]'>
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex flex-col justify-center
         items-center w-10 h-10 space-y-1 group z-[10000000] relative'>
        <span
          className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out 
            ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-black transition duration-300 ease-in-out 
            ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out 
            ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
        />
      </button>

      {/* Slide Menu */}
      <motion.div
        // initial={{ y: "100%" }}
        // animate={{ y: isOpen ? "0%" : "100%" }}
        // className='fixed top-0 right-0 w-64 h-screen bg-white
        // shadow-lg p-6 flex flex-col space-y-4 z-10'
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className=' absolute top-[100%] right-12 
        bg-white shadow-md rounded-lg
      
        '>
        <nav
          className={`mt-1 space-y-6 text-lg font-medium list-none 
         px-10 py-4 ${isOpen ? "flex flex-col" : "hidden"}`}>
          <li>
            <a
              href='#home '
              //   className='{sm:px-0 px-4 bg-white/ rounded-2xl
              // sm:shadow-none shadow py-1}'
              className=' '
              onClick={() => setIsOpen(!open)}>
              Home
            </a>
          </li>
          <li>
            <a href='#prices' className='' onClick={() => setIsOpen(!open)}>
              Price
            </a>
          </li>
          <li>
            <a href='#verify' className='' onClick={() => setIsOpen(!open)}>
              Verify
            </a>
          </li>
          <li>
            <a href='#exchange' className='' onClick={() => setIsOpen(!open)}>
              Exchange
            </a>
          </li>
          <li>
            <a href='#contact' className='' onClick={() => setIsOpen(!open)}>
              Contact
            </a>
          </li>
        </nav>
      </motion.div>

      {/* Overlay */}
      {/* {isOpen && (
        // <div
        //   className='fixed inset-0 bg-red opacity-30 z-40'
        //   onClick={() => setIsOpen(false)}
        // />
      )} */}
    </div>
  );
};

export default HamburgerMenu;
