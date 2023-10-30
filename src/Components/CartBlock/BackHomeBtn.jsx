import React from "react";
import { Link } from "react-router-dom";
import classes from "./CartBlock.module.css";

const BackHomeBtn = () => {
  return (
    <Link to="/" className={classes.backHome}>
      <i className="fa-solid fa-chevron-left"></i> Back to shop
    </Link>
  );
};
export default BackHomeBtn;
