import classes from "./CartBlock.module.css";
const CartItem = ({ id, image, title, price, sauce, count }) => {
  return (
    <>
      <div className={classes.itemInfo}>
        <img src={image} className={classes.sushiImg} alt="sushi's item" />
        <h3>{title}</h3>
        <p className={classes.sauseInfo}>{sauce}</p>
      </div>
      <div className={classes.itemAmount}>
        <button className={classes.minus}>-</button>
        <p>{count}</p>
        <button className={classes.plus}>+</button>
      </div>
      <div className={classes.price}>{price}$</div>
      <div className={classes.deleteItem}>
        <i className="fa-regular fa-circle-xmark"></i>
      </div>
    </>
  );
};
export default CartItem;
