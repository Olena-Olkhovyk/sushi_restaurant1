import React from "react";
import classes from "./Sort.module.css";

const Sort = () => {
  const [selected, setSelected] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const sortList = ["popularity", "price", "a-z"];
  return (
    <div className={classes.sort}>
      <b>Sort by: </b>
      <span onClick={() => setOpen(!open)}>popularity</span>
      <div className={classes.sortPopUp}>
        {open && (
          <ul className={classes.listWrapper}>
            {sortList.map((val, i) => (
              <li
                key={val}
                onClick={() => setSelected(i)}
                className={selected === i ? classes.active : ""}
              >
                {val}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Sort;
