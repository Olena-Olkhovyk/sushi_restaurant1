import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";
const Header = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalItems = items.reduce((sum, item) => sum + item.count, 0);
  const location = useLocation();
  return (
    <div className={styles.Header}>
      <div className={styles.logoImg}>
        <Link to="/">
          <img src={logo} alt="logo" />
          <span className={styles.logoName}>Sushi paradise</span>
        </Link>
      </div>
      {location.pathname != "/cart" && (
        <div className={styles.cartInfo}>
          <Link to="/cart" className={styles.price}>
            {totalPrice}$
          </Link>
          <Link to="/cart" className={styles.cart}>
            <i className="fa-solid fa-cart-shopping"></i>
            {totalItems}
          </Link>
        </div>
      )}
    </div>
  );
};
export default Header;
