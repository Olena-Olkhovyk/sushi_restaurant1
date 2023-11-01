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
        <img src={sushi.ingredientImg1} alt={sushi.ingridientTitle1} />
        <p>{sushi.ingridientTitle1}</p>
        <img src={sushi.ingredientImg2} alt={sushi.ingridientTitle2} />
        <p>{sushi.ingridientTitle2}</p>
        <img src={sushi.ingredientImg3} alt={sushi.ingridientTitle3} />
        <p>{sushi.ingridientTitle3}</p>
        <img src={sushi.ingredientImg4} alt={sushi.ingridientTitle4} />
        <p>{sushi.ingridientTitle4}</p>
        <img src={sushi.ingredientImg5} alt={sushi.ingridientTitle5} />
        <p>{sushi.ingridientTitle5}</p>{" "}
        <img src={sushi.ingredientImg6} alt={sushi.ingridientTitle6} />
        <p>{sushi.ingridientTitle6}</p>
      </div>
    </>
  );
};
export default ItemDetail;
