import React from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Home from "./components/Home";
import Payment from "./components/Payment";
import Students from "./components/Students";
import Error from "./components/Error";
import {Route, Routes } from "react-router-dom";

function App(props) {
  return (
      <div className="wrapper">
          <Aside />
        <main className="main">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="*" element={<Error />} />
              </Routes>
        </main>
      </div>
  );
}

export default App;
