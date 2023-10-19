import React from "react";
import classes from "./Sort.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

const Sort = () => {
  const [open, setOpen] = React.useState(false);
  const sortList = [
    { name: "popularity", sortProperty: "rating" },
    { name: "a-z", sortProperty: "title" },

    { name: "price", sortProperty: "price" },
  ];
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter.sort);

  const highlightAndClosePopup = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };
  return (
    <div className={classes.sort}>
      <b>Sort by: </b>
      <span className={classes.options} onClick={() => setOpen(!open)}>
        {value.name}
      </span>
      <div className={classes.sortPopUp}>
        {open && (
          <ul className={classes.listWrapper}>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => highlightAndClosePopup(obj)}
                className={
                  value.sortProperty === obj.sortProperty ? classes.active : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Sort;
