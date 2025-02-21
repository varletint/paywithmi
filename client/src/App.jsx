import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import MakePayment from "./Pages/MakePayment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/deptC-payment' element={<MakePayment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
