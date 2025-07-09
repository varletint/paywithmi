import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./GeneratePaymentDetails";

export default function TransanctionVerification() {
  const referenceSlug = useParams();
  // const [matric_no, setMatricNo] = useState("u17/fns/css/1129");
  const [formData, setFormData] = useState({
    refrence: referenceSlug.reference,
  });
  // const [fullname, setFullname] = useState("");
  const [paymentData, setPaymentData] = useState([]);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const amount = (paymentData.amount / 100).toFixed(0);
  const namount = Number(amount);

  console.log(formData);
  console.log(namount);

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
          setPaymentAmount(par(json.data.amount));
        } else {
          setError(json.message || "Verification failed");
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchReferenceDetails();
  }, [referenceSlug.reference]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`/api/item/getItems?priceTag=${namount}`);
        const data = await res.json();
        console.log(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  });

  const loadFormData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {};

  return (
    <div className=' max-w-3xl mx-auto flex justify-center'>
      <form
        onSubmit={handleSubmit}
        className='mt-[8rem] 
       w-[26rem] px-4 py-2 flex flex-col gap-4'>
        <div className=' flex justify-between px-0.5 text-[1rem] font-semibold'>
          <p>{paymentData.reference}</p>
          <p
            className='px-1.5 py-0.5 bg-[#adeec8f3] text-[#038329]
          rounded font-bold'>
            ₦{(paymentData.amount / 100).toFixed(2)}
          </p>
        </div>
        <div className=' flex flex-col gap-1.5'>
          <label className='px-1'> </label>

          <input
            type='text'
            name='fullname'
            id='fullname'
            onChange={loadFormData}
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
            value={
              paymentData.customer?.email?.replace("@gmail.com", "") ||
              "No valid Matric Number"
            }
            onChange={loadFormData}
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
          focus:outline-none font-semibold text-[#45524c]'>
            <option className=''> Payment for</option>
            <option> Manual for CSC110</option>
            <option> Manual for CSC213</option>
            <option> Manual for CSC213</option>
          </select>
        </div>
        <div className=''></div>
        <Button
          text={"Submit"}
          className='text-center
        font-semibold py-3 rounded-xl bg-[#4a6352] text-white'></Button>
      </form>
    </div>
  );
}
