import React from "react";
import "./SearchInput.css";

const SearchInput = ({ searchValue, setSearchValue }) => {
  return (
    <div className="searchField">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Search sushi"
      />
    </div>
  );
};
export default SearchInput;
