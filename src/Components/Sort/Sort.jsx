import React from "react";
import classes from "./Sort.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

const Sort = () => {
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef();

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      const path = e.composedPath ? e.composedPath() : e.path;
      !path.includes(sortRef.current) && setOpen(false);
      console.log("hi");
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const sortList = [
    { name: "popularity", sortProperty: "rating" },
    { name: "a-z", sortProperty: "title" },
    { name: "price", sortProperty: "price" },
  ];

  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);

  const highlightAndClosePopup = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };
  return (
    <div ref={sortRef} className={classes.sort}>
      <b>Sort by: </b>
      <span className={classes.options} onClick={() => setOpen(!open)}>
        {sort.name}
      </span>
      <div className={classes.sortPopUp}>
        {open && (
          <ul className={classes.listWrapper}>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => highlightAndClosePopup(obj)}
                className={
                  sort.sortProperty === obj.sortProperty ? classes.active : ""
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
