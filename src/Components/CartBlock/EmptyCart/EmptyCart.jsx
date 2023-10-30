import React from "react";
import classes from "./EmptyCart.module.css";
import emptyCart from "../../assets/images/emptyCart.webp";

const EmptyCart = () => {
  return (
    <div className={classes.emptyCartBlock}>
      <h1>The cart is empty😕</h1>
      <p>
        Most likely, you didn't order anything. <br />
        To order sushi, go back to the main page.
      </p>
      <img src={emptyCart} alt="empty cart information" />
    </div>
  );
};
export default EmptyCart;
