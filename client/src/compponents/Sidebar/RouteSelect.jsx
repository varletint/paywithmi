import React from "react";
// import Route from "./Route";

export default function RouteSelect() {
  return (
    <div className='space-y-1'>
      <Route selected={true} title='Dashboard' />
      <Route title='Category' />
      <Route title='Payments' />
      <Route title='Transactions' />
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
        ? "bg-white text-stone-950 shadow"
        : "hover:bg-[#ddebe0] bg-transparent text-[#7a998a] shadow-none"
    }   `}>
      {/* <Icon /> */}
      <span>{title}</span>
    </button>
  );
};
