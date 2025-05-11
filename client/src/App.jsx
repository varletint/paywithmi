import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import MakePayment from "./Pages/MakePayment";
import GotoPaymentPage from "./Pages/GotoPaymentPage";
import TypesOfPayment from "./Pages/TypesOfPayment";
import CreateItem from "./Pages/CreateItem";
import SignIn from "./Pages/SignIn";
import AdminPrivate from "./compponents/AdminPrivate";
import Page from "./Pages/Page";
import CreateAccount from "./Pages/CreateAccount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GotoPaymentPage />} />
          <Route path='/deptC-payment' element={<MakePayment />} />
          <Route path='/payment-types' element={<TypesOfPayment />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<CreateAccount />} />

          {/* Private Routes */}
          <Route element={<AdminPrivate />}></Route>
          <Route path='/dashboard' element={<Page />} />
          <Route path='/create-item' element={<CreateItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
