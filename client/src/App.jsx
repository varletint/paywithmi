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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GotoPaymentPage />} />
          <Route path='/deptC-payment' element={<MakePayment />} />
          <Route path='/payment-types' element={<TypesOfPayment />} />
          <Route path='/sign-in' element={<SignIn />} />

          <Route path='/dashboard' element={<Page />} />

          {/* Private Routes */}
          <Route element={<AdminPrivate />}>
            <Route path='/create-item' element={<CreateItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
