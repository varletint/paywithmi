// src/components/Receipt.jsx
import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Download({ orderData }) {
  const receiptRef = useRef();

  const handleDownload = async () => {
    const element = receiptRef.current;
    if (!element) return;

    // 1) Use html2canvas to render the receipt DOM to a canvas
    const canvas = await html2canvas(element, {
      scale: 2, // increase resolution
      useCORS: true, // if you have external images/styles
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height], // match HTML size
    });

    // 2) Add the image to the PDF (0,0 at top-left)
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

    // 3) Trigger download (e.g. “receipt.pdf”)
    pdf.save(`receipt-${orderData || Date.now()}.pdf`);
  };

  return (
    <div>
      {/* This is the section we’ll “capture” */}
      <div
        ref={receiptRef}
        style={{
          width: "600px",
          padding: "20px",
          border: "1px solid #ccc",
          marginBottom: "1rem",
          backgroundColor: "white", // make sure bg is white
        }}>
        <h2>Payment Receipt</h2>
        <p>Order ID: {orderData.id}</p>
        <p>Date: {new Date(orderData.date).toLocaleString()}</p>
        <hr />
        <ul>
          {orderData.items.map((item, i) => (
            <li key={i}>
              {item.name} × {item.qty} – ${(item.price * item.qty).toFixed(2)}
            </li>
          ))}
        </ul>
        <hr />
        <p>
          <strong>Total:</strong> $
          {orderData.items
            .reduce((sum, it) => sum + it.price * it.qty, 0)
            .toFixed(2)}
        </p>
        <p>Paid via: {orderData.method}</p>
      </div>

      <button onClick={handleDownload}>Download Receipt as PDF</button>
    </div>
  );
}
