import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchInput from "../Components/Searchinput/SearchInput";
import FilterCategories from "../Components/Filter/FilterCategories";
import Sort from "../Components/Sort/Sort";
import Items from "../Components/Items/Items";
import Skeleton from "../Components/Items/Skeleton";
import Pagination from "../Components/pagination/Pagination";
import { setCategoryId } from "../redux/slices/filterSlice";

const Home = () => {
  const [item, setItem] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = React.useState("");

  const [sortType, setSortType] = React.useState({
    name: "popularity",
    sortProperty: "rating",
  });
  const itemsPerPage = 4;

  //FILTER CATEGORIES from redux
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  //FILTER CATEGORIES from redux

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

  //How many pages will be displayed on page
  const numberOfTotalPages = Math.ceil(item.length / itemsPerPage);
  //Turn number of pages(4) to array

  const indexOfLastElem = currentPage * itemsPerPage;
  const indexofFirstElement = indexOfLastElem - itemsPerPage;
  const visibleitems = item.slice(indexofFirstElement, indexOfLastElem);

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
          onClickCategory={onClickCategory}
        />
      </div>
      <div className="items-container">
        <Pagination
          currentPage={currentPage}
          numberOfTotalPages={numberOfTotalPages}
          setCurrentPage={setCurrentPage}
        />
        <article className="itemCard">
          {isLoading
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : visibleitems.map((item) => <Items key={item.id} {...item} />)}
        </article>
      </div>
    </>
  );
};
export default Home;
