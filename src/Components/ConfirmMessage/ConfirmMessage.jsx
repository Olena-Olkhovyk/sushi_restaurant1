import classes from "./ConfirmMessage.module.css";
const ConfirmMessage = () => {
  return (
    <>
      <div className={classes.confirmMessage}>
        <p>Thank you!</p>
        <p>We are getting started on your order right away</p>
      </div>
    </>
  );
};
export default ConfirmMessage;
