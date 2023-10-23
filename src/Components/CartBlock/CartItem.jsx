import { addItem, minusItem } from "../../redux/slices/cartSlice";
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
  return (
    <>
      <div className={classes.itemInfo}>
        <img src={image} className={classes.sushiImg} alt="sushi's item" />
        <h3>{title}</h3>
        <p className={classes.sauseInfo}>{sauce}</p>
      </div>
      <div className={classes.itemAmount}>
        <button onClick={handleMinusItem} className={classes.minus}>
          -
        </button>
        <p>{count}</p>
        <button onClick={handlePlusItem} className={classes.plus}>
          +
        </button>
      </div>
      <div className={classes.price}>{price}$</div>
      <div className={classes.deleteItem}>
        <i className="fa-regular fa-circle-xmark"></i>
      </div>
    </>
  );
};
export default CartItem;
