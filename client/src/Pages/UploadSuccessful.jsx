import { FaCheckCircle, FaPrint } from "react-icons/fa";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

{
  /*export default function UploadSuccessful() {
  return (
    <div className=' min-h-screan mx-auto max-w-[21rem] '>
      <div className='bg-white mt-5 shadow rounded-xl px-3 py-5'>
        <div className='text-center py-2 '>
          <FaCheckCircle
            className='w-[5rem] mx-auto h-[5rem] 
          text-green-600 py- shadow'
          />
        </div>
        <div className='w-full border mt-7'></div>
        <div className='customer-details flex justify-between  py- mt-7'>
          <div className='left flex flex-col gap-2'>
            <p className=' font-semibold text-sm'>Reference Number</p>
            <p className=' font-semibold text-sm'>Matric Number</p>
            <p className=' font-semibold text-sm'>Item Name</p>
            <p className=' font-semibold text-sm'> Amount</p>
            <p className=' font-semibold text-sm'>Transaction Date & Time</p>
          </div>
          <div className='left flex flex-col gap-2'>
            <p className=' font-semibold text-sm text-end'>Reference Number</p>
            <p className=' font-semibold text-sm text-end'>Matric Number</p>
            <p className=' font-semibold text-sm text-end'>Item Name</p>
            <p className=' font-semibold text-sm text-end'> Amount</p>
            <p className=' font-semibold text-sm text-end'>
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <div className='w-full border mt-7'></div>
        <div className=' mt-10 flex justify-end px-7'>
         
          <button
            className=' bg-[#4a6352] rounded-3xl w-[3rem] h-[3rem] flex 
          justify-center items-center shadow'
            onClick={() => window.print()}>
            <FaPrint className=' text-white h-6 w-6  ' />
          </button>
        </div>
      </div>
    </div>
  );
}*/
}
export default function UploadSuccessful() {
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
    pdf.save(`receipt-${`1239` || Date.now()}.pdf`);
  };
  return (
    <div className=' min-h-screan mx-auto max-w-[21rem] '>
      <div
        ref={receiptRef}
        className='bg-white mt-5 shadow rounded-xl px-3 py-5'>
        <div className='text-center py-2 '>
          <FaCheckCircle
            className='w-[5rem] mx-auto h-[5rem] 
          text-green-600 py- shadow'
          />
        </div>
        <div className='w-full border mt-7'></div>
        <div className='customer-details flex justify-between  py- mt-7'>
          <div className='left flex flex-col gap-2'>
            <p className=' font-semibold text-sm'>Reference Number</p>
            <p className=' font-semibold text-sm'>Matric Number</p>
            <p className=' font-semibold text-sm'>Item Name</p>
            <p className=' font-semibold text-sm'> Amount</p>
            <p className=' font-semibold text-sm'>Transaction Date & Time</p>
          </div>
          <div className='left flex flex-col gap-2'>
            <p className=' font-semibold text-sm text-end'>Reference Number</p>
            <p className=' font-semibold text-sm text-end'>Matric Number</p>
            <p className=' font-semibold text-sm text-end'>Item Name</p>
            <p className=' font-semibold text-sm text-end'> Amount</p>
            <p className=' font-semibold text-sm text-end'>
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <div className='w-full border mt-7'></div>
        <div className=' mt-10 flex justify-end px-7'>
          {/* <button className=' bg-[#4a6352] text-white w-[6rem] outline-none py-2'>
            Print
          </button> */}
          <button
            className=' bg-[#4a6352] rounded-3xl w-[3rem] h-[3rem] flex 
          justify-center items-center shadow'
            onClick={handleDownload}>
            <FaPrint className=' text-white h-6 w-6  ' />
          </button>
        </div>
      </div>
    </div>
  );
}
