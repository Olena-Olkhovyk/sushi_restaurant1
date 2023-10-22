import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <div className={styles.Header}>
      <div className={styles.logoImg}>
        <Link to="/">
          <img src={logo} alt="logo" />
          <span className={styles.logoName}>Sushi paradise</span>
        </Link>
      </div>
      <div className={styles.cartInfo}>
        <Link to="/cart" className={styles.price}>
          {totalPrice}$
        </Link>
        <Link to="/cart" className={styles.cart}>
          <i className="fa-solid fa-cart-shopping"></i>
          {totalItems}
        </Link>
      </div>
    </div>
  );
};
export default Header;
