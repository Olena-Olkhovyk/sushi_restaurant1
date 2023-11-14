import classes from "./FilterCategories.module.css";
import all from "../assets/images/all.png";
import premium from "../assets/images/premium.png";
import rolls from "../assets/images/rolls.png";
import royal from "../assets/images/royal.png";
import sets from "../assets/images/sets.png";

const FilterCategories = ({ categoryId, onClickCategory }) => {
  const categories = [
    { name: "All", image: all },
    { name: "Premium", image: premium },
    { name: "Rolls", image: rolls },
    { name: "Royal", image: royal },
    { name: "Sets", image: sets },
  ];
  return (
    <>
      <ul className={classes.listWrapper}>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={categoryId === i ? classes.active : ""}
          >
            <img
              src={value.image}
              alt={value.name}
              className={classes.categoriesImgs}
            />
            {value.name}
          </li>
        ))}
      </ul>
    </>
  );
};
export default FilterCategories;
