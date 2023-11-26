import { Link } from "react-router-dom";
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
      <div className={classes.imgContainer}>
        <img src={emptyCart} alt="empty cart information" />
      </div>
      <Link to="/" className={classes.backShopBtn}>
        <i className="fa-solid fa-chevron-left"></i> Back to shop
      </Link>
    </div>
  );
};
export default EmptyCart;
