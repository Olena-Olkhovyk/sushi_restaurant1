import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
// import NotFound from "./Components/NotFoundBlock/index.jsx";

function App() {
  return (
    <div className="App-wrapper">
      <div className="container">
        <div className="header-container">
          <Header />
        </div>
        <div className="content">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
