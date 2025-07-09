import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// export default function GeneratePaymentDetails() {
//   const date = new Date();
//   const [transactionDetails, setTransactionDetails] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     try {
//     } catch (error) {
//       setIsLoading(false);
//       setErrorMessage(error.message);
//     }
//   }, [transactionDetails]);

//   // console.log(date);

//   return (
//     <div>
//       <ReferenceIdDetails
//         reference={`pqwD190c3`}
//         customer={`u17/fns/csc/1910@gmail.com`}
//         amount={Number("2300")}
//         channel={"ATM Card"}
//         paid_at={`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
//       />

//       {/* <Button text={"Submit your reference ID for Swapping"} /> */}
//     </div>
//   );
// }
// const ReferenceIdDetails = ({
//   reference,
//   amount,
//   paid_at,
//   status,
//   gateway_response,
//   channel,
//   currency,
//   ip_address,
//   metadata,
//   customer,
// }) => {
//   return (
//     <div
//       className=' min-h-screen max-w-3xl
//     flex flex-col gap-[10rem] mx-auto py-6'>
//       <div
//         className='w-[100%] h-scree  py-2 px-3
//       flex flex-col text-[#3e8f57] gap-[3rem]'>
//         <div className='top flex flex-col sm:flex-row gap justify-between'>
//           <h1 className=' font-bold text-nowrap text-xl'>VT Service</h1>

//           <div className='top_details'>
//             <p className='font-semibold text-nowrap text-[0.83rem] text-[#4a6352]'>
//               Refrence Number:
//               <span className='ml-2 text-red-500 '>{reference}</span>
//             </p>
//             <p className='font-semibold text-nowrap text-[0.83rem] text-[#4a6352]'>
//               Date:
//               <span className=' ml-2 text-[#4a6352] '>{"12/03/2025"}</span>
//             </p>
//           </div>
//         </div>
//         <div className='bottom '>
//           <h1 className=' font-bold'>Transaction Details</h1>

//           <div className='flex justify-between mt-5'>
//             {/* left */}

//             <div
//               className='left text-[#4a6352] font-semibold
//             flex flex-col gap-1.5'>
//               <p className='bg-[#e1f7e8]'>Reference</p>
//               <p>Matric No</p>
//               <p className='bg-[#e1f7e8]'>Amount Paid</p>
//               <p>Payment Time</p>
//               <p className='bg-[#e1f7e8]'>Paid Method</p>
//             </div>

//             {/* right */}

//             <div
//               className='right text-[#4a6352]
//             flex flex-col gap-1.5'>
//               <p className='bg-[#e1f7e8]'>{reference}</p>
//               <p className='uppercase'>{customer?.replace("@gmail.com", "")}</p>
//               <p className='bg-[#e1f7e8]'>
//                 <span>NGN </span>
//                 {amount}
//               </p>
//               <p>{paid_at}</p>
//               <p className='bg-[#e1f7e8]'>{channel}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=' text-center'>
//         <p className=' block text-[.9rem] mb-4'>
//           Click the button below to verify and submit your reference ID
//         </p>
//         {/* <Button
//           className='bg-[#4a6352] mb-[6.1rem]
//         py-3 font-semibold text-white text-[1.1rem]
//         w-[17rem] rounded-xl shadow'
//           text={"Submit"}
//         /> */}
//         <div className='mb-[rem]'>
//           <Link
//             to={`/generate-receipt/${reference}`}
//             className=' bg-[#4a6352] text-white font-semibold
//            py-3.5 px-[7rem] rounded-xl shadow mt-[3rem]'>
//             Verify
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ReferenceIdDetails = ({ data }) => {
//   const {
//     reference,
//     amount,
//     paid_at,
//     status,
//     gateway_response,
//     channel,
//     currency,
//     ip_address,
//     metadata,
//     customer,
//   } = data;
//   return (
//     <div
//       className=' min-h-screen max-w-3xl
//     flex flex-col gap-[10rem] mx-auto py-6'>
//       <div
//         className='w-[100%] h-scree  py-2 px-3
//       flex flex-col text-[#3e8f57] gap-[3rem]'>
//         <div className='top flex flex-col sm:flex-row gap justify-between'>
//           <h1 className=' font-bold text-nowrap text-xl'>VT Service</h1>

//           <div className='top_details'>
//             <p className='font-semibold text-nowrap text-[0.83rem] text-[#4a6352]'>
//               Refrence Number:
//               <span className='ml-2 text-red-500 '>{reference}</span>
//             </p>
//             <p className='font-semibold text-nowrap text-[0.83rem] text-[#4a6352]'>
//               Date:
//               <span className=' ml-2 text-[#4a6352] '>{"12/03/2025"}</span>
//             </p>
//           </div>
//         </div>
//         <div className='bottom '>
//           <h1 className=' font-bold'>Transaction Details</h1>

//           <div className='flex justify-between mt-5'>
//             {/* left */}

//             <div
//               className='left text-[#4a6352] font-semibold
//             flex flex-col gap-1.5'>
//               <p className='bg-[#e1f7e8]'>Reference</p>
//               <p>Matric No</p>
//               <p className='bg-[#e1f7e8]'>Amount Paid</p>
//               <p>Payment Time</p>
//               <p className='bg-[#e1f7e8]'>Paid Method</p>
//             </div>

//             {/* right */}

//             <div
//               className='right text-[#4a6352]
//             flex flex-col gap-1.5'>
//               <p className='bg-[#e1f7e8]'>{reference}</p>
//               <p className='uppercase'>{customer?.replace("@gmail.com", "")}</p>
//               <p className='bg-[#e1f7e8]'>
//                 <span>NGN </span>
//                 {amount}
//               </p>
//               <p>{paid_at}</p>
//               <p className='bg-[#e1f7e8]'>{channel}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=' text-center'>
//         <p className=' block text-[.9rem] mb-4'>
//           Click the button below to verify and submit your reference ID
//         </p>
//         {/* <Button
//           className='bg-[#4a6352] mb-[6.1rem]
//         py-3 font-semibold text-white text-[1.1rem]
//         w-[17rem] rounded-xl shadow'
//           text={"Submit"}
//         /> */}
//         <div className='mb-[rem]'>
//           <Link
//             to={`/generate-receipt/${reference}`}
//             className=' bg-[#4a6352] text-white font-semibold
//            py-3.5 px-[7rem] rounded-xl shadow mt-[3rem]'>
//             Verify
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

export const Button = ({ text, className }) => {
  return <Link className={className}> {text}</Link>;
};

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// // Receipt UI component
function PaymentReceipt({ data }) {
  if (!data) return <p className='text-center py-4'>Loading receipt...</p>;

  const {
    reference,
    amount,
    paid_at,
    status,
    gateway_response,
    channel,
    currency,
    ip_address,
    metadata,
    customer,
  } = data;

  return (
    <div
      className=' min-h-screen max-w-3xl
    flex flex-col gap-[10rem] mx-auto py-6'>
      <div
        className='w-[100%] h-scree  py-2 px-3
      flex flex-col text-[#3e8f57] gap-[3rem]'>
        <div className='top flex flex-col sm:flex-row gap justify-between'>
          <h1 className=' font-bold text-nowrap text-xl'>VT Service</h1>

          <div className='top_details'>
            <p className='font-semibold text-nowrap text-[0.83rem] text-[#4a6352]'>
              Refrence Number:
              <span className='ml-2 text-red-500 '>{reference}</span>
            </p>
            <p className='font-semibold text-nowrap text-[0.83rem] text-[#4a6352]'>
              Date:
              <span className=' ml-2 text-[#4a6352] '>{"12/03/2025"}</span>
            </p>
          </div>
        </div>
        <div className='bottom '>
          <h1 className=' font-bold'>Transaction Details</h1>

          <div className='flex justify-between mt-5'>
            {/* left */}

            <div
              className='left text-[#4a6352] font-semibold
            flex flex-col gap-1.5'>
              <p className='bg-[#e1f7e8]'>Reference</p>
              <p>Matric No</p>
              <p className='bg-[#e1f7e8]'>Amount Paid</p>
              <p>Payment Time</p>
              <p className='bg-[#e1f7e8]'>Paid Method</p>
            </div>

            {/* right */}

            <div
              className='right text-[#4a6352]
            flex flex-col gap-1.5'>
              <p className='bg-[#e1f7e8]'>{reference}</p>
              <p className='uppercase'>
                {customer?.email?.replace("@gmail.com", "")}
              </p>
              <p className='bg-[#e1f7e8]'>
                ₦{(amount / 100).toFixed(2)} {currency}
              </p>
              <p>{new Date(paid_at).toLocaleString()}</p>
              <p className='bg-[#e1f7e8] cha'>{channel}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=' text-center'>
        <p className=' block text-[.9rem] mb-4'>
          Click the button below to verify and submit your reference ID
        </p>
        {/* <Button
          className='bg-[#4a6352] mb-[6.1rem]
        py-3 font-semibold text-white text-[1.1rem]
        w-[17rem] rounded-xl shadow'
          text={"Submit"}
        /> */}
        <div className='mb-[rem]'>
          <Link
            to={`/verify/${reference}`}
            className=' bg-[#4a6352] text-white font-semibold
           py-3.5 px-[7rem] rounded-xl shadow mt-[3rem]'>
            Verify
          </Link>
        </div>
      </div>
    </div>
  );
}

// // Main component that fetches and passes data
export default function GeneratePaymentDetails() {
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  console.log(paymentData);

  // Extract 'ref' query param
  const searchParams = new URLSearchParams(location.search);
  const reference = searchParams.get("reference");

  useEffect(() => {
    if (!reference) return;

    async function fetchTransaction() {
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
      } catch (err) {
        setError(err.message);
      }
    }

    fetchTransaction();
  }, [reference]);

  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      {error && <p className='text-red-600 text-center'>Error: {error}</p>}

      {!reference ? (
        <p className='text-center'>No reference found in URL.</p>
      ) : (
        <PaymentReceipt data={paymentData} />
      )}
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { useLocation, useParams, useSearchParams } from "react-router-dom";

// export default function GeneratePaymentDetails() {
//   const [paymentDetails, setPaymentDetails] = useState([]);
//   const [reference, setReference] = useState("p2uwicr1j9");
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const [page, setPage] = useState([]);
//   const { postSlug } = useParams();
//   console.log(reference);

//   useEffect(() => {
//     if (searchParams.has("ref")) {
//       const ref = searchParams.get("ref");
//       const form = new FormData();
//       console.log(ref);
//       setReference(ref);
//       form.append("reference", ref);
//       // console.log(form.get("reference"));
//     }
//     // const urlParam = new URLSearchParams(location.search);
//     // urlParam.get("ref");
//     // console.log(urlParam.values());

//     const getTranstionDetails = async () => {
//       try {
//         const res = await fetch(
//           `https://api.paystack.co/transaction/verify/${reference}`,
//           {
//             method: "GET",
//             headers: {
//               Authorization:
//                 "Bearer sk_test_1d3f0d7cd61c3a8476b995c7b0597daa67eb2d2f",
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         const data = await res.json();
//         setPage(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getTranstionDetails();
//   }, [location.search]);
//   // console.log(reference);

//   return <div>GeneratePaymentDetails</div>;
// }
