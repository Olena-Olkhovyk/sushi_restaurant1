import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <>
      <div className={styles.Header}>
        <div className={styles.logoImg}>
          <img src={logo} alt="logo" />
          <span className={styles.logoName}>Sushi paradise</span>
        </div>
        <div className={styles.cartInfo}>
          <a href="/" className={styles.price}>
            0$
          </a>
          <a href="/" className={styles.cart}>
            <i className="fa-solid fa-cart-shopping"></i>0
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
