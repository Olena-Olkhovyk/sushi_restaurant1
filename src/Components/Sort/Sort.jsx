import React from "react";
import classes from "./Sort.module.css";

const Sort = () => {
  return (
    <div className={classes.sort}>
      <b>Sort by: </b>
      <span>popularity</span>
      <div className={classes.sortPopUp}>
        <ul className={classes.listWrapper}>
          <li>popularity</li>
          <li>price</li>
          <li>A-Z</li>
        </ul>
      </div>
    </div>
  );
};
export default Sort;
