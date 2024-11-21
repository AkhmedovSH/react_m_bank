import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import validation from 'assets/icons/validation.svg'
import check from 'assets/icons/check.svg'

import Index from "./routes/index"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/variables.css'
import 'assets/css/style.css'
import 'assets/css/auth.css'
import 'assets/css/adaptive.css'

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={100000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        theme="colored"
        toastClassName='custom-toast'
        icon={({ type }) => (type === "error" ? <img src={validation} alt="" /> : <img src={check} alt="" />)}
      />

      <Router>
        <Index />
      </Router>
    </>
  );
}

export default App;
