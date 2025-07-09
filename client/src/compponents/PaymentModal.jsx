import ReactDOM from "react-dom";

export default function PaymentModal({ open, children, onClose }) {
  const modal = document.querySelector("modal");
  console.log({ onClose });

  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className=' z-[100]  modal
      min-h-screen w-full transition-all  bg-red-300'>
      {children}
    </div>,
    document.getElementById("portal")
  );
}
