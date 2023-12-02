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
          <div className={classes.mainImgContain}>
            <img
              src={sushi.image}
              className={classes.mainImg}
              alt={sushi.title}
            />
          </div>
          <div className={classes.infoBlock}>
            <h1 className={classes.title}>
              {sushi.title}({sushi.weight}g)
            </h1>
            <Sauces
              sauceType={sauceType}
              activeId={activeId}
              setActiveId={setActiveId}
            />
            <h3 className={classes.ingridientsTitle}>Ingredients</h3>
            <div className={classes.ingredientsBlock}>
              {[1, 2, 3, 4, 5, 6].map((ingredientIndex) => (
                <div key={ingredientIndex}>
                  {sushi[`ingredientImg${ingredientIndex}`] && (
                    <img
                      src={sushi[`ingredientImg${ingredientIndex}`]}
                      className={classes.ingridientImg}
                      alt={sushi[`ingridientTitle${ingredientIndex}`]}
                    />
                  )}

                  <p>{sushi[`ingridientTitle${ingredientIndex}`]}</p>
                </div>
              ))}
            </div>
            <div className={classes.orderContainer}>
              <h2>{sushi.price}$</h2>
              <AddToCartButton
                id={sushi.id}
                image={sushi.image}
                title={sushi.title}
                price={sushi.price}
                activeId={activeId}
                sauceType={sauceType}
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
