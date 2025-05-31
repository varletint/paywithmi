import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GenerateReceipt() {
  const referenceSlug = useParams();
  const [fullname, setFullname] = useState("");
  const [matric_no, setMatricNo] = useState("u17/fns/css/1129");
  const [paymentData, setPaymentData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReferenceDetails = async () => {
      const reference = referenceSlug.reference;
      if (!reference) return;

      try {
        const res = await fetch(
          `https://api.paystack.co/transaction/verify/${reference}`,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer sk_test_1d3f0d7cd61c3a8476b995c7b0597daa67eb2d2f",
              "Content-Type": "application/json",
            },
          }
        );
        const json = await res.json();
        if (json.status) {
          setPaymentData(json.data);
        } else {
          setError(json.message || "Verification failed");
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchReferenceDetails();
  }, [referenceSlug.reference]);

  const handleSubmit = (e) => {};

  return (
    <div className=' max-w-3xl mx-auto flex justify-center'>
      <form
        onSubmit={handleSubmit}
        className='mt-[8rem] 
       w-[26rem] px-4 py-2 flex flex-col gap-4'>
        <div className=' flex justify-between px-0.5 text-[1rem] font-semibold'>
          <p>pqxoe2321</p>
          <p
            className='px-1.5 py-0.5 bg-[#adeec8f3] text-[#038329]
          rounded font-bold'>
            <span className=' line-through'>N</span>2300
          </p>
        </div>
        <div className=' flex flex-col gap-1.5'>
          <label className='px-1'> </label>

          <input
            type='text'
            name='fullname'
            id='name'
            placeholder='Fullname'
            className=' border-none bg-[#ddebe0] 
            placeholder:text-[#8aa197] rounded-[.5rem] px-4 py-3
          focus:outline-none shadow font-semibold'
          />
        </div>
        <div className=' flex flex-col gap-1.5'>
          <label className='px-1'> Matric Number</label>
          <input
            type='text'
            name='matric_no'
            id='matric_no'
            value={matric_no}
            className=' border-none bg-slate-200 
            disabled:text-[#8aa197] rounded-[.5rem] px-4 py-3
          focus:outline-none shadow disabled:font-semibold
           disabled:cursor-not-allowed'
            disabled
            required
          />
        </div>
        <div className=' bg-[#ddebe0] px-3 py-1.5 rounded-xl shadow mt-2'>
          <select
            name=''
            id=''
            className=' border-none bg-transparent
          focus:outline-none'>
            <option value=''></option>
          </select>
        </div>
      </form>
    </div>
  );
}
