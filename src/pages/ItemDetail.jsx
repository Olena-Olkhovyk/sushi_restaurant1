import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import classes from "./ItemDetail.module.css";
import { AddToCartButton } from "../Components/CartBlock/AddToCartBtn";
import { Sauces } from "../Components/Items/Sauces";

const sauceType = ["unagi sauce", "teriyaki sauce"];
const ItemDetail = () => {
  const [sushi, setSushi] = useState();
  const [activeId, setActiveId] = React.useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchSushi() {
      try {
        const { data } = await axios.get(
          "https://651ee1a444a3a8aa476925cf.mockapi.io/sushi/" + id
        );
        setSushi(data);
      } catch (error) {
        //navigate("/");
      }
    }

    fetchSushi();
  });
  if (!sushi) {
    return "Loading..";
  }
  return (
    <>
      <div className={classes.itemDetailBlock}>
        <div className={classes.itemDetailBlockInfo}>
          <img
            src={sushi.image}
            className={classes.mainImg}
            alt={sushi.title}
          />
          <div className={classes.infoBlock}>
            <h1>{sushi.title}</h1>
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
            <h3>Ingredients</h3>
            <div className={classes.ingredientsBlock}>
              {[1, 2, 3, 4, 5, 6].map((ingredientIndex) => (
                <div key={ingredientIndex}>
                  <img
                    src={sushi[`ingredientImg${ingredientIndex}`]}
                    className={classes.ingridientImg}
                    alt={sushi[`ingridientTitle${ingredientIndex}`]}
                  />
                  <p>{sushi[`ingridientTitle${ingredientIndex}`]}</p>
                </div>
              ))}
            </div>
            <AddToCartButton
              id={sushi.id}
              image={sushi.image}
              title={sushi.title}
              price={sushi.price}
              activeId={activeId}
              sauceType={sauceType}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
