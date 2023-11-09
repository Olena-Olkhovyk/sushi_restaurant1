import { useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Checkout.module.css";

export const Checkout = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qfmo1w3",
        "template_uyl1pdp",
        form.current,
        "zfKxXG29IG1WazDNd"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={classes.checkoutContainer}>
      <h2>To confirm your order, please submit the form</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className={classes.formGroup}>
          <input
            type="text"
            required
            className={classes.fieldInp}
            name="user_name"
          />
          <label>Name and Surname</label>
        </div>
        <div className={classes.formGroup}>
          <input
            type="text"
            required
            className={classes.fieldInp}
            name="user_email"
          />
          <label>Email</label>
        </div>
        <div className={classes.formGroup}>
          <input
            type="number"
            required
            className={classes.fieldInp}
            name="user_phone"
          />
          <label>Phone</label>
        </div>
        <div className={classes.formGroup}>
          <input
            type="text"
            required
            className={classes.fieldInp}
            name="user_address"
          />
          <label>Address(street, house)</label>
        </div>
        <div className={classes.formGroup}>
          <textarea required name="message" className={classes.fieldInp} />
          <label>Special wishes</label>
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
export default Checkout;
