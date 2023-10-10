import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
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
          0$
        </Link>
        <Link to="/cart" className={styles.cart}>
          <i className="fa-solid fa-cart-shopping"></i>0
        </Link>
      </div>
    </div>
  );
};
export default Header;
