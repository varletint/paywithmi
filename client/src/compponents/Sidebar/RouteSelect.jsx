import React, { useState } from "react";
import {
  FaCashRegister,
  FaList,
  FaPlus,
  FaReceipt,
  FaTimes,
  FaTimesCircle,
} from "react-icons/fa";
import { HiArrowLeft, HiOutlineViewBoards } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CreateItem from "../createItem";

export default function RouteSelect() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='space-y-1 bg-[#f1f7f3] z-[-]'>
        <Route
          Icon={<HiOutlineViewBoards />}
          selected={true}
          title='Dashboard'
        />
        <Route Icon={<FaList />} title='Category' />
        <Route Icon={<FaReceipt />} title='Payments' />
        <Route Icon={<FaCashRegister />} title='Transactions' />
        {/* <Link to={"/create-item"}> */}
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          <Route Icon={<FaPlus />} title='Add Transactions' />
        </div>
        {/* </Link> */}
      </div>
      {isOpen ? (
        <AnimatePresence
          initial={true}
          // className='fixed left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2    inset-0 '>
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}>
            <div
              className='fixed left-[50%] top-1/2   inset-0 
          bg-white z-[1000] w-[350px] py-[rem] h-[500px] sm:w-[500px]
          -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl
          '>
              <div
                className='  py-3 flex justify-end
            '>
                <FaTimes
                  size={25}
                  className=''
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <CreateItem />
            </div>
          </motion.div>
        </AnimatePresence>
      ) : null}

      {isOpen && (
        <div
          className='fixed  inset-0 bg-[#111] opacity-30 z-[100]'
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

const Route = ({ title, selected = false, Icon, click }) => {
  return (
    <button
      className={`flex items-center justify-start gap-2
     w-full px-2 py-1.5 rounded
    text-sm
    transition-[box-shadow,_background-color_color] ${
      selected
        ? "bg-white text-[#7a998a] shadow"
        : "hover:bg-[#ddebe0] bg-transparent text-[#7a998a] shadow-none"
    }   `}
      onClick={click}>
      {Icon}
      <span>{title}</span>
    </button>
  );
};
