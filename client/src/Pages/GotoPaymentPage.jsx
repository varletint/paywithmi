import { React, useState } from "react";
import PaymentModal from "../compponents/PaymentModal";
import MakePayment from "./MakePayment";
import Header from "../compponents/Header";
import TypesOfPayment from "./TypesOfPayment";

export default function GotoPaymentPage() {
  const [showModal, setShowModal] = useState(false);
  const [active, isActive] = useState("");
  const [display, setDisplay] = useState("none");
  // console.log(display);

  const popop = () => {
    const span = document.querySelector("span");
    const popup = document.querySelector(".popup");
    console.log(popup);
    // popop.innerH = "red";
    // alert(span);
  };
  return (
    <>
      <div className='header '>
        <Header
          classname='lg:w-[100%] md:w-[100%] sm:w-[22rem] mx-auto 
          px-3 py-4 text-center items-center font-semibold text-2xl'
        />
      </div>
      <div className={`popup ${active} ${display} bg-red-500`}>
        {/* <MakePayment onClose={ () => isActive( "" ) } /> */}
        <TypesOfPayment onClose={() => isActive("")} />
      </div>
      {/* <PaymentModal open={showModal} onClose={() => setShowModal(false)}>
        <div className=''>
          <MakePayment onClose={() => isActive("")} />
        </div>
      </PaymentModal> */}

      <div
        className='min-h-screen max-w-[22rem] mx-auto  flex
      justify-center items-center
  '>
        <div className='flex justify-center  '>
          <div
            className='
              '>
            <span
              onClick={() => {
                isActive("active"), setDisplay("block"), popop();
              }}
              className=' bg-[#333] px-16 py-4 text-white
        font-semibold rounded-lg outline-none border-none cursor-default'>
              Make your Payment
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
