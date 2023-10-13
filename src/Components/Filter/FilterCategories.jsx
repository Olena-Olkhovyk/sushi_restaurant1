import React from "react";
import classes from "./FilterCategories.module.css";

const FilterCategories = ({ categoryId, onClickCategory }) => {
  const categories = ["All", "Rolls", "Royal", "Sushi sets"];
  return (
    <>
      <ul className={classes.listWrapper}>
        {categories.map((value, i) => (
          <li
            key={value}
            onClick={() => onClickCategory(i)}
            className={categoryId === i ? classes.active : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};
export default FilterCategories;
