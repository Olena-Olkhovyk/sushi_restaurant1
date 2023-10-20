import React from "react";
import "./SearchInput.css";
import { SearchContext } from "../../App";

const SearchInput = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className="searchField">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="search"
        placeholder="Search sushi"
      />
    </div>
  );
};
export default SearchInput;
