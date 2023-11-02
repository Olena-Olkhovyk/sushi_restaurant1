import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";
import classes from "./CartBlock.module.css";
import { useDispatch } from "react-redux";

const CartItem = ({ id, image, title, price, sauce, count }) => {
  const dispatch = useDispatch();
  const handleMinusItem = () => {
    dispatch(minusItem(id));
  };
  const handlePlusItem = () => {
    dispatch(addItem({ id }));
  };
  const handleRemoveItem = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={classes.shop}>
      <div className={classes.box}>
        <img src={image} className={classes.sushiImg} alt="sushi's item" />
        <div className={classes.content}>
          <h3>{title}</h3>
          <p className={classes.sauceInfo}>{sauce}</p>
          <p className={classes.price}>Price: {price}$</p>
          <span className={classes.removeItemBtn} onClick={handleRemoveItem}>
            <i className="fa-solid fa-xmark"></i>
          </span>
          <span className={classes.itemAmount}>
            <button onClick={handleMinusItem} className={classes.minus}>
              -
            </button>
            <span>{count}</span>
            <button onClick={handlePlusItem} className={classes.plus}>
              +
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
