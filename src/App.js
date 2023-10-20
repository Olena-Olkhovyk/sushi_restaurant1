import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router";

export const SearchContext = React.createContext();
function App() {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="App-wrapper">
      <div className="container">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <div className="header-container">
            <Header />
          </div>
          <div className="content">
            <Outlet></Outlet>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
