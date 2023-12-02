import classes from "./Error.module.css";
const Error = () => {
  return (
    <div className={classes.erorBlock}>
      <h4 className={classes.error}>
        We're currently experiencing a high volume of requests. Please try again
        in a moment.
      </h4>
    </div>
  );
};
export default Error;
