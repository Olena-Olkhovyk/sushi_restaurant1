import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router";
// import NotFound from "./Components/NotFoundBlock/index.jsx";

function App() {
  return (
    <div className="App-wrapper">
      <div className="container">
        <div className="header-container">
          <Header />
        </div>
        <div className="content">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
