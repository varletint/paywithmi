import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import MakePayment from "./Pages/MakePayment";
import GotoPaymentPage from "./Pages/GotoPaymentPage";
import TypesOfPayment from "./Pages/TypesOfPayment";
import CreateItem from "./Pages/createItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/w' element={<GotoPaymentPage />} />
          <Route path='/deptC-payment' element={<MakePayment />} />
          <Route path='/payment-types' element={<TypesOfPayment />} />
          <Route path='/' element={<CreateItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
