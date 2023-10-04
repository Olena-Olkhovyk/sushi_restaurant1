import React from "react";
import classes from "./FilterCategories.module.css";

const FilterCategories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ["Sushi", "Rolls", "Royal", "Sushi sets"];
  return (
    <>
      <ul className={classes.listWrapper}>
        {categories.map((value, i) => (
          <li
            key={value}
            onClick={() => setActiveIndex(i)}
            className={activeIndex === i ? classes.active : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};
export default FilterCategories;
