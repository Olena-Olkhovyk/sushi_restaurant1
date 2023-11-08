import classes from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div className={classes.mistakeBlock}>
      <h1>😔No results found</h1>
      <p>Unfortunately this page is not available in our online store</p>
    </div>
  );
};
export default NotFound;
