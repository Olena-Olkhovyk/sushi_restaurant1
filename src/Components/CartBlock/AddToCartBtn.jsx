import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { selectCartItemById } from "../../redux/slices/cartSlice";
import classes from "../Items/Items.module.css";

export const AddToCartButton = ({
  id,
  image,
  title,
  price,
  sauceType,
  activeId,
}) => {
  const dispatch = useDispatch();

  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const handleClickAdd = () => {
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
    <button onClick={handleClickAdd} className={classes.orderBtn}>
      Add to cart{" "}
      {addedCount > 0 && (
        <span className={classes.itemAmount}>{addedCount}</span>
      )}
    </button>
  );
};
