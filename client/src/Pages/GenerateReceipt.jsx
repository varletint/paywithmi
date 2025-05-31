import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GenerateReceipt() {
  const referenceSlug = useParams();
  const [fullname, setFullname] = useState("");
  const [matric_no, setMatricNo] = useState("");
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

  return <div> {referenceSlug.reference}</div>;
}
