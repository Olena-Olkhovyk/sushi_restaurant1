import "./App.css";
import Header from "./Components/Header/Header";
import SearchInput from "./Components/Searchinput/SearchInput";
import FilterCategories from "./Components/Filter/FilterCategories";
import Sort from "./Components/Sort/Sort";
import Items from "./Components/Items/Items";
function App() {
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
          <Items />
        </div>
      </div>
    </div>
  );
}

export default App;
