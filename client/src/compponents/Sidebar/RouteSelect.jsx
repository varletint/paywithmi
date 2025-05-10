import React from "react";
import {
  FaCashRegister,
  FaDashcube,
  FaList,
  FaPlus,
  FaReceipt,
} from "react-icons/fa";
import {
  HiDatabase,
  HiDocument,
  HiOutlineViewBoards,
  HiViewBoards,
} from "react-icons/hi";

export default function RouteSelect() {
  return (
    <div className='space-y-1'>
      <Route Icon={<HiOutlineViewBoards />} selected={true} title='Dashboard' />
      <Route Icon={<FaList />} title='Category' />
      <Route Icon={<FaReceipt />} title='Payments' />
      <Route Icon={<FaCashRegister />} title='Transactions' />
      <Route Icon={<FaPlus />} title='Add Transactions' />
    </div>
  );
}

const Route = ({ title, selected = false, Icon }) => {
  return (
    <button
      className={`flex items-center justify-start gap-2
     w-full px-2 py-1.5 rounded
    text-sm
    transition-[box-shadow,_background-color_color] ${
      selected
        ? "bg-white text-[#7a998a] shadow"
        : "hover:bg-[#ddebe0] bg-transparent text-[#7a998a] shadow-none"
    }   `}>
      {Icon}
      <span>{title}</span>
    </button>
  );
};
