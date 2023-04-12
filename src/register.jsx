import React from 'react';
import ReactDOM from 'react-dom/client'
import Register from './pages/Register';
import "./pages/Register/index.scss";

ReactDOM.createRoot(document.getElementById('register')).render(
    <React.StrictMode>
      <Register/>
    </React.StrictMode>,
  )

export default Register;