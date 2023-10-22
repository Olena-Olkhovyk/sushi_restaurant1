import React from "react";
import classes from "./CartBlock.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartBlock = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  return (
    <div className={classes.cartBlock}>
      <div className={classes.cartHeader}>
        <h2>
          <i className="fa-solid fa-cart-shopping"></i>Your Cart
        </h2>
      </div>
      <p className={classes.deleteAll}>
        <i className="fa-solid fa-trash"></i>Delete all
      </p>
      <div className={classes.cartContainer}>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className={classes.orderDetails}>
        <p>
          Total items:<span>{items.length}</span>
        </p>
        <p>
          Total cost:<span>{totalPrice}$</span>
        </p>
      </div>
      <div className={classes.bottomButtons}>
        <Link to="/" className={classes.backHome}>
          <i className="fa-solid fa-chevron-left"></i> Back to home
        </Link>
        <Link to="" className={classes.orderNow}>
          Order now
        </Link>
      </div>
    </div>
  );
};
export default CartBlock;
