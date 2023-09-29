import React from "react";
import classes from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <>
      <div className={classes.searchField}>
        <input
          type="text"
          className={classes.input}
          placeholder="Search sushi"
        />
      </div>
    </>
  );
};
export default SearchInput;
