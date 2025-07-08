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
import GeneratePaymentDetails from "./Pages/GeneratePaymentDetails";
import TransanctionVerification from "./Pages/TransanctionVerification";
import UploadSuccessful from "./Pages/UploadSuccessful";
import Download from "./Pages/Download";
import Testing from "./Pages/Testing";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pay/:price' element={<MakePayment />} />
          <Route path='/payment-types' element={<TypesOfPayment />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/test' element={<Testing />} />
          <Route
            path='/generate-payment-details'
            element={<GeneratePaymentDetails />}
          />
          <Route
            element={<TransanctionVerification />}
            path='/verify/:reference'
          />
          <Route
            path='/verify-success/:reference'
            element={<UploadSuccessful />}
          />
          <Route path='/download' element={<Download />} />
          {/* <Route path='/register' element={<CreateAccount />} /> */}

          {/* Private Routes */}
          {/* <Route element={<AdminPrivate />}> */}
          <Route path='/dashboard' element={<Page />} />
          <Route path='/create-item' element={<CreateItem />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
