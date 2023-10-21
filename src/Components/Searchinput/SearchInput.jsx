import React from "react";
import "./SearchInput.css";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

const SearchInput = () => {
  const [value, setValue] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const updatedSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );
  const onChangeValue = (e) => {
    setValue(e.target.value);
    updatedSearchValue(e.target.value);
  };
  return (
    <div className="searchField">
      <input
        value={value}
        onChange={onChangeValue}
        type="search"
        placeholder="Search sushi"
      />
    </div>
  );
};
export default SearchInput;
