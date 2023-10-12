import React from "react";
import classes from "./Items.module.css";

const Items = ({ image, title, price, sauce }) => {
  const [activeId, setActiveId] = React.useState(0);
  return (
    <div className={classes.productContainer}>
      <div className={classes.imgContainer}>
        <img className={classes.itemImg} src={image} />
      </div>
      <div className={classes.description}>
        <h2 className={classes.itemTitle}>{title}</h2>
        <ul className={classes.sause}>
          {sauce.map((sauce, id) => (
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
          <span className={classes.price}>{price}</span>
          <button className={classes.orderBtn}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default Items;
