import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import SearchInput from "../Components/Searchinput/SearchInput";
import FilterCategories from "../Components/Filter/FilterCategories";
import Sort from "../Components/Sort/Sort";
import Items from "../Components/Items/Items";
import Skeleton from "../Components/Items/Skeleton";
import Pagination from "../Components/pagination/Pagination";
import { setCategoryId } from "../redux/slices/filterSlice";
import { fetchSushi } from "../redux/slices/sushiSlice";
import { SearchContext } from "../App";

const Home = () => {
  // const searchValue = useSelector((state) => state.searchValue);
  // const { searchValue } = React.useContext(SearchContext);
  //FILTER CATEGORIES from redux
  const { categoryId, sort, searchValue } = useSelector(
    (state) => state.filter
  );
  const { items, status } = useSelector((state) => state.sushi);
  const sortType = sort.sortProperty;
  const dispatch = useDispatch();
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  //FILTER CATEGORIES from redux

  const getSushi = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sort = sortType;
    const search = searchValue ? `&search=${searchValue}` : "";
    //setIsLoading(true);

    dispatch(
      fetchSushi({
        category,
        sort,
        search,
      })
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getSushi();
  }, [categoryId, sortType, searchValue]);

  // const itemsPerPage = 4;
  // //How many pages will be displayed on page
  // const numberOfTotalPages = Math.ceil(item.length / itemsPerPage);
  // //Turn number of pages(4) to array

  // const indexOfLastElem = currentPage * itemsPerPage;
  // const indexofFirstElement = indexOfLastElem - itemsPerPage;
  // const visibleitems = item.slice(indexofFirstElement, indexOfLastElem);

  return (
    <>
      <div className="search-container">
        <SearchInput />
      </div>
      <div className="filter-container">
        <Sort />
        <FilterCategories
          categoryId={categoryId}
          onClickCategory={onClickCategory}
        />
      </div>
      <div className="items-container">
        {status === "error" ? (
          <span>Sorry</span>
        ) : (
          <article className="itemCard">
            {status === "loading"
              ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
              : items.map((item) => <Items key={item.id} {...item} />)}
          </article>
        )}
      </div>
    </>
  );
};
export default Home;
