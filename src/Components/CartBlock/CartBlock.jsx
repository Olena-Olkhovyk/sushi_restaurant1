import React from "react";
import classes from "./CartBlock.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
        <div className={classes.itemInfo}>
          <img
            src="https://yaposhka.com.ua/media/catalog/product/cache/b8d5666ecec5f6597a39ca6d2a6b3110/b/l/blackdr.webp"
            className={classes.sushiImg}
            alt="sushi's item"
          />
          <h3>Sushi's name</h3>
          <p className={classes.sauseInfo}>teriyaki sauce</p>
        </div>
        <div className={classes.itemAmount}>
          <button className={classes.minus}>-</button>
          <p>2</p>
          <button className={classes.plus}>+</button>
        </div>
        <div className={classes.price}>10$</div>
        <div className={classes.deleteItem}>
          <i className="fa-regular fa-circle-xmark"></i>
        </div>
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
