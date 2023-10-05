import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SearchInput from "./Components/Searchinput/SearchInput";
import FilterCategories from "./Components/Filter/FilterCategories";
import Sort from "./Components/Sort/Sort";
import Items from "./Components/Items/Items";

function App() {
  const [item, setItem] = React.useState([]);
  React.useEffect(() => {
    fetch("https://651ee1a444a3a8aa476925cf.mockapi.io/sushi")
      .then((res) => res.json())
      .then((arr) => setItem(arr));
  }, []);

  return (
    <div className="App-wrapper">
      <div className="container">
        <div className="header-container">
          <Header />
        </div>
        <div className="search-container">
          <SearchInput />
        </div>
        <div className="filter-container">
          <Sort />
          <FilterCategories />
        </div>
        <div className="items-container">
          <article className="itemCard">
            {item.map((item) => (
              <Items key={item.id} {...item} />
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
