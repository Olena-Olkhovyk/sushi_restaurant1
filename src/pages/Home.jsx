import React, { useState } from "react";
import SearchInput from "../Components/Searchinput/SearchInput";
import FilterCategories from "../Components/Filter/FilterCategories";
import Sort from "../Components/Sort/Sort";
import Items from "../Components/Items/Items";
import Skeleton from "../Components/Items/Skeleton";

const Home = () => {
  const [item, setItem] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = React.useState("");
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "popularity",
    sortProperty: "rating",
  });
  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sort = sortType.sortProperty;
    const search = searchValue ? `&search=${searchValue}` : "";
    setIsLoading(true);
    fetch(
      `https://651ee1a444a3a8aa476925cf.mockapi.io/sushi?${category}&sortBy=${sort}&order=asc${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItem(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);
  return (
    <>
      <div className="search-container">
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="filter-container">
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
        <FilterCategories
          categoryId={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
      </div>
      <div className="items-container">
        <article className="itemCard">
          {isLoading
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : item.map((item) => <Items key={item.id} {...item} />)}
        </article>
      </div>
    </>
  );
};
export default Home;
