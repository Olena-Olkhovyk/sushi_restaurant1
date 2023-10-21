import React from "react";
import classes from "./Items.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

const sauceType = ["unagi sauce", "teriyaki sauce"];

const Items = ({ id, image, title, price, sauce }) => {
  const [activeId, setActiveId] = React.useState(0);
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      image,
      title,
      price,
      sauce: sauceType[activeId],
    };
    dispatch(addItem(item));
  };
  return (
    <div className={classes.productContainer}>
      <div className={classes.imgContainer}>
        <img className={classes.itemImg} src={image} />
      </div>
      <div className={classes.description}>
        <h2 className={classes.itemTitle}>{title}</h2>
        <ul className={classes.sause}>
          {sauceType.map((sauce, id) => (
            <li
              key={id}
              onClick={() => setActiveId(id)}
              className={activeId === id ? classes.active : ""}
            >
              {sauce}
            </li>
          ))}
        </ul>
        <div className={classes.priceDetails}>
          <span className={classes.price}>${price}</span>
          <button onClick={onClickAdd} className={classes.orderBtn}>
            Add to cart <span className={classes.itemAmount}>0</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Items;
