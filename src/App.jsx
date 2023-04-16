import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import { context } from "./components/context";
import LANG from "./components/language/language.jsx";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Home from "./components/Home";
import Payment from "./components/Payment";
import Students from "./components/Students";
import Error from "./components/Error";
import {Route, Routes } from "react-router-dom";

function App(props) {

  const [language, setLanguage] = useState(localStorage.getItem("language") || '2');
  const [mode, setMode] = useState(localStorage.getItem('theme') || true);

  return (
    <context.Provider value={{language, mode, LANG}}>
    <BrowserRouter>
      <div className="wrapper">
          <Aside />
        <main className="main">
              <Header setLanguage={setLanguage} setMode={setMode}/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="*" element={<Error />} />
              </Routes>
        </main>
      </div>
      </BrowserRouter>
    </context.Provider>
  );
}

export default App;
