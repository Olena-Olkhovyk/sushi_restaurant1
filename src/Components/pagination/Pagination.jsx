import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ currentPage, numberOfTotalPages, setCurrentPage }) => {
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage !== numberOfTotalPages) setCurrentPage(currentPage + 1);
  };
  const pages = [...Array(numberOfTotalPages + 1).keys()].slice(1);
  return (
    <span className={classes.pages}>
      <span onClick={prevPage}>prev</span>
      {pages.map((page) => (
        <p
          key={page}
          onClick={() => setCurrentPage(page)}
          className={currentPage === page ? classes.active : ""}
        >
          {page}
        </p>
      ))}
      <span onClick={nextPage}>next</span>
    </span>
  );
};
export default Pagination;
