import React from "react";
import classes from "./Items.module.css";

const Items = () => {
  return (
    <article className={classes.itemCard}>
      <div className={classes.productContainer}>
        <div className={classes.imgContainer}>
          <img
            className={classes.itemImg}
            src="https://previews.dropbox.com/p/thumb/ACDJpdlQQYnb_eEMdicMdy8_332ld4km6BhSxIYQTGIM7ugjpefnw3VRxHlg7EXs1PwujMlVRlHgac1zunYhx4H74sckZjsIiDVWh4eiSwEgemEwsZGhRrasielsGAJKuEBvxGbRFDtkQq86dkAsB7zKYizn8Y0ZE9ZAHiSEZ7AZs37Fi7FPN41_XawB6N3oEsYGJ2MzfIhRlyck69mjY3bCJkkkuU1eswvJx4iaQzmZbyzcI9mYdn63r96Ra0EGjQx3ZCABI7DHw0JjDg2SPjOgxACmRuvYqfEdEZBGB8pWMG6cYN0_Qb4QsRDptNoV5f3lBKyXICQgxyNIibV1TyRz/p.png"
          />
        </div>
        <div className={classes.description}>
          <h2 className={classes.itemTitle}>Nigua</h2>
          <ul className={classes.sause}>
            <li>unagi sauce</li>
            <li>teriyaki sauce</li>
          </ul>
          <div className={classes.priceDetails}>
            <span className={classes.price}>700$</span>
            <button className={classes.orderBtn}>Add to cart</button>
          </div>
        </div>
      </div>{" "}
      <div className={classes.productContainer}>
        <div className={classes.imgContainer}>
          <img
            className={classes.itemImg}
            src="https://previews.dropbox.com/p/thumb/ACAO-HOJfw4qckZ09mq0sMeO_E4QwXrh_5i1yI6x5_P0LlnfJtJZzU-0ao0yaexpoV6FMS7aKQczltJJqcVSuY93DyHuPStzPK17m-jatRnUUtxEgnq5xOYHnJ-GhzeYDZcRy5M32J75rdNQuCCa-L9KovrPWqQTlyQ2UPp77PWfKsRWm_pZ9E_qcdKqFkgsePSRHwHpIR2vhxpqZ6yBWPhy0nI7QExkjUULuJaYlM_CRnzl42DFvqjtHMxkxQUo_UFcM2-8AhUaLofxl3oBxQs5v6EGcnK_yNtSoNC_pjUlwJzIvhUjVwtxZIrg00IccvmW3mMfi603d-IEAfSkULeM/p.png"
          />
        </div>
        <div className={classes.description}>
          <h2 className={classes.itemTitle}>Sushi set with salmon</h2>
          <ul className={classes.sause}>
            <li>unagi sauce</li>
            <li>teriyaki sauce</li>
          </ul>
          <div className={classes.priceDetails}>
            <span className={classes.price}>700$</span>
            <button className={classes.orderBtn}>Add to cart</button>
          </div>
        </div>
      </div>{" "}
      <div className={classes.productContainer}>
        <div className={classes.imgContainer}>
          <img
            className={classes.itemImg}
            src="https://previews.dropbox.com/p/thumb/ACDJpdlQQYnb_eEMdicMdy8_332ld4km6BhSxIYQTGIM7ugjpefnw3VRxHlg7EXs1PwujMlVRlHgac1zunYhx4H74sckZjsIiDVWh4eiSwEgemEwsZGhRrasielsGAJKuEBvxGbRFDtkQq86dkAsB7zKYizn8Y0ZE9ZAHiSEZ7AZs37Fi7FPN41_XawB6N3oEsYGJ2MzfIhRlyck69mjY3bCJkkkuU1eswvJx4iaQzmZbyzcI9mYdn63r96Ra0EGjQx3ZCABI7DHw0JjDg2SPjOgxACmRuvYqfEdEZBGB8pWMG6cYN0_Qb4QsRDptNoV5f3lBKyXICQgxyNIibV1TyRz/p.png"
          />
        </div>
        <div className={classes.description}>
          <h2 className={classes.itemTitle}>Nigua</h2>
          <ul className={classes.sause}>
            <li>unagi sauce</li>
            <li>teriyaki sauce</li>
          </ul>
          <div className={classes.priceDetails}>
            <span className={classes.price}>700$</span>
            <button className={classes.orderBtn}>Add to cart</button>
          </div>
        </div>
      </div>{" "}
    </article>
  );
};
export default Items;
