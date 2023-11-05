import React from "react";
import classes from "./Items.module.css";
import { Link } from "react-router-dom";
import { AddToCartButton } from "../CartBlock/AddToCartBtn";
import { Sauces } from "./Sauces";

const sauceType = ["unagi sauce", "teriyaki sauce"];

const Items = ({ id, image, title, price }) => {
  const [activeId, setActiveId] = React.useState(0);
  return (
    <div className={classes.productContainer}>
      <div className={classes.imgContainer}>
        <img className={classes.itemImg} src={image} />
      </div>
      <div className={classes.description}>
        <Link to={`/sushi/${id}`}>
          <h2 className={classes.itemTitle}>{title}</h2>
        </Link>
        <Sauces
          sauceType={sauceType}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        {/* <ul className={classes.sause}>
          {sauceType.map((sauce, id) => (
            <li
              key={id}
              onClick={() => setActiveId(id)}
              className={activeId === id ? classes.active : ""}
            >
              {sauce}
            </li>
          ))}
        </ul> */}
        <div className={classes.priceDetails}>
          <span className={classes.price}>${price}</span>
          <AddToCartButton
            id={id}
            image={image}
            title={title}
            price={price}
            activeId={activeId}
            sauceType={sauceType}
          />
        </div>
      </div>
    </div>
  );
};
export default Items;
