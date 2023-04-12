import React from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";

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
        </main>
    </div>
  );
}

export default App;
