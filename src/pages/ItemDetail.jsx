import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import classes from "./ItemDetail.module.css";

const ItemDetail = () => {
  const [sushi, setSushi] = useState();
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
      <img src={sushi.image} />
      <h1>{sushi.title}</h1>
      <div className={classes.ingredientsBlock}>
        {[1, 2, 3, 4, 5, 6].map((ingredientIndex) => (
          <div key={ingredientIndex}>
            <img
              src={sushi[`ingredientImg${ingredientIndex}`]}
              alt={sushi[`ingridientTitle${ingredientIndex}`]}
            />
            <p>{sushi[`ingridientTitle${ingredientIndex}`]}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default ItemDetail;
