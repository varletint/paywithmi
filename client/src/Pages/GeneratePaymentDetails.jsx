import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function GeneratePaymentDetails() {
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [reference, setReference] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [page, setPage] = useState([]);
  const { postSlug } = useParams();
  console.log(reference);

  useEffect(() => {
    if (searchParams.has("ref")) {
      const ref = searchParams.get("ref");
      const form = new FormData();
      console.log(ref);
      setReference(ref);
      form.append("reference", ref);
      // console.log(form.get("reference"));
    }
    // const urlParam = new URLSearchParams(location.search);
    // urlParam.get("ref");
    // console.log(urlParam.values());

    const getTranstionDetails = async () => {
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
        const data = await res.json();
        setPage(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTranstionDetails();
  }, [location.search]);
  // console.log(reference);

  return <div>GeneratePaymentDetails</div>;
}
