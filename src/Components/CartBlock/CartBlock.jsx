import classes from "./CartBlock.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearItem } from "../../redux/slices/cartSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart/EmptyCart";
import { selectCart } from "../../redux/slices/cartSlice";

const CartBlock = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalItems = items.reduce((sum, item) => sum + item.count, 0);
  const dispatch = useDispatch();
  const deleteAllItems = () => {
    if (window.confirm("Are you sure you want to delete all items?")) {
      dispatch(clearItem());
    }
  };
  if (totalPrice === 0) {
    return <EmptyCart />;
  }
  return (
    <div className={classes.cartBlock}>
      <h2>
        <i className="fa-solid fa-cart-shopping"></i>Your Cart
      </h2>
      <p onClick={deleteAllItems} className={classes.deleteAll}>
        <i className="fa-solid fa-trash"></i>Delete all
      </p>
      <div className={classes.project}>
        <div className={classes.cartContainer}>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className={classes.rightBar}>
          <p>
            Total items:<span>{totalItems}</span>
          </p>
          <hr />
          <p>
            Total cost:<span>{totalPrice}$</span>
          </p>
          <hr />
          <p>
            Shipping:<span>0$</span>
          </p>
          <hr />
          <Link to="/checkout" className={classes.orderNow}>
            Checkout
          </Link>
          <Link to="/" className={classes.backHome}>
            <i className="fa-solid fa-chevron-left"></i> Back to shop
          </Link>
        </div>
        <div className={classes.mobileRightBar}>
          <div className={classes.mobileItemsPrice}>
            <h2>Total cost:</h2>
            <h2>{totalPrice}$</h2>
          </div>
          <div className={classes.mobileBtnContainer}>
            <Link to="/checkout" className={classes.mobileOrderNow}>
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartBlock;
