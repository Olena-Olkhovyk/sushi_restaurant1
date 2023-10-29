import React from "react";
import "./SearchInput.css";
import { setSearchValue } from "../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

const SearchInput = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const updatedSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
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
