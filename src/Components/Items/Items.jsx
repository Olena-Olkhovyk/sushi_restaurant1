import React from "react";
import classes from "./Items.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { selectCartItemById } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const sauceType = ["unagi sauce", "teriyaki sauce"];

const Items = ({ id, image, title, price, sauce }) => {
  const [activeId, setActiveId] = React.useState(0);
  const dispatch = useDispatch();

  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
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
        <Link to={`/sushi/${id}`}>
          <h2 className={classes.itemTitle}>{title}</h2>
        </Link>
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
            Add to cart{" "}
            {addedCount > 0 && (
              <span className={classes.itemAmount}>{addedCount}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Items;
