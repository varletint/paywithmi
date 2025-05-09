import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function DashComp() {
  const [allPayment, setAllPayment] = useState([]);
  const [studentThatPay, setStudentThatPay] = useState([]);
  const [totalStudentThatPay, setTotalStudentThatPay] = useState(0);
  const [items, setItems] = useState([]);

  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className='p-4'>
      <div
        className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar
        scrollbar-track-slate-100 scrollbar-thumb-slate-300'>
        <div className='w-[20vw] bg-gray-600 h-56  rounded-3xl'>u</div>
      </div>
    </div>
  );
}
