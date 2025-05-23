import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Receipt UI component
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
    <div className='max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white text-gray-800 font-sans'>
      <h2 className='text-2xl font-bold text-center mb-4'>Payment Receipt</h2>

      <div className='mb-2'>
        <strong>Reference:</strong> {reference}
      </div>
      <div className='mb-2'>
        <strong>Status:</strong>{" "}
        <span
          className={status === "success" ? "text-green-600" : "text-red-600"}>
          {status.toUpperCase()}
        </span>
      </div>
      <div className='mb-2'>
        <strong>Amount Paid:</strong> ₦{(amount / 100).toFixed(2)} {currency}
      </div>
      <div className='mb-2'>
        <strong>Payment Method:</strong> {channel}
      </div>
      <div className='mb-2'>
        <strong>Payment Time:</strong> {new Date(paid_at).toLocaleString()}
      </div>
      <div className='mb-2'>
        <strong>Gateway Response:</strong> {gateway_response}
      </div>
      <div className='mb-2'>
        <strong>IP Address:</strong> {customer.email}
      </div>
      {/* <div className='mb-2'>
        <strong>Referrer:</strong>{" "}
        <a
          href={metadata?.referrer}
          className='text-blue-600 underline'
          target='_blank'
          rel='noopener noreferrer'>
          {metadata?.referrer}
        </a>
      </div> */}

      <div className='text-center mt-6'>
        <button
          onClick={() => window.print()}
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
          Print Receipt
        </button>
      </div>
    </div>
  );
}

// Main component that fetches and passes data
export default function GeneratePaymentDetails() {
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

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
