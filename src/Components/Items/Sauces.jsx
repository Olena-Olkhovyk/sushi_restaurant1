import React from "react";
import classes from "./Items.module.css";

export const Sauces = ({ sauceType, activeId, setActiveId }) => {
  return (
    <ul className={classes.sause}>
      {sauceType.map((sauce, id) => (
        <li
          key={id}
          onClick={() => setActiveId(id)}
          className={activeId === id ? classes.active : ""}
        >
          {sauce}
        </li>
      ))}
    </ul>
  );
};
