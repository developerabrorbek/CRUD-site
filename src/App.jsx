import React from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Home from "./components/Home";

function App(props) {
  return (
    <div className="wrapper">
      <aside className="aside">
        <Aside />
      </aside>
      <main className="main">
          <header className="header">
            <div className="container">
              <Header />
            </div>
          </header>
          <div className="hero">
            <div className="container">
              <Home/>
            </div>
          </div>
        </main>
    </div>
  );
}

export default App;
