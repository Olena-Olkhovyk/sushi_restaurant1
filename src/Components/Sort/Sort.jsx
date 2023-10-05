import React from "react";
import classes from "./Sort.module.css";

const Sort = () => {
  const [selected, setSelected] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const sortList = ["popularity", "price", "a-z"];
  const selectedOption = sortList[selected];
  const highlightAndClosePopup = (index) => {
    setSelected(index);
    setOpen(false);
  };
  return (
    <div className={classes.sort}>
      <b>Sort by: </b>
      <span className={classes.options} onClick={() => setOpen(!open)}>
        {selectedOption}
      </span>
      <div className={classes.sortPopUp}>
        {open && (
          <ul className={classes.listWrapper}>
            {sortList.map((val, i) => (
              <li
                key={val}
                onClick={() => highlightAndClosePopup(i)}
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
