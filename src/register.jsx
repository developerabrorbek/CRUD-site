import React from 'react';
import ReactDOM from 'react-dom/client'
import Register from './pages/Register';
import {ToastContainer } from 'react-toastify';
import "./pages/Register/index.scss";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('register')).render(
    <React.StrictMode>
      <ToastContainer/>
      <Register/>
    </React.StrictMode>,
  )

export default Register;