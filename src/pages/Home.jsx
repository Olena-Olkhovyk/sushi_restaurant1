import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import SearchInput from "../Components/Searchinput/SearchInput";
import FilterCategories from "../Components/Filter/FilterCategories";
import Sort from "../Components/Sort/Sort";
import Items from "../Components/Items/Items";
import Skeleton from "../Components/Items/Skeleton";
import Pagination from "../Components/pagination/Pagination";
import { setCategoryId } from "../redux/slices/filterSlice";
import { SearchContext } from "../App";

const Home = () => {
  const [item, setItem] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = React.useContext(SearchContext);
  //FILTER CATEGORIES from redux
  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;
  const dispatch = useDispatch();
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  //FILTER CATEGORIES from redux

  const fetchSushi = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sort = sortType;
    const search = searchValue ? `&search=${searchValue}` : "";
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://651ee1a444a3a8aa476925cf.mockapi.io/sushi?${category}&sortBy=${sort}&order=asc${search}`
      );
      setItem(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      alert("Error while retrieving products");
      setIsLoading(false);
    }

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    fetchSushi();
  }, [categoryId, sortType, searchValue]);

  const itemsPerPage = 4;
  //How many pages will be displayed on page
  const numberOfTotalPages = Math.ceil(item.length / itemsPerPage);
  //Turn number of pages(4) to array

  const indexOfLastElem = currentPage * itemsPerPage;
  const indexofFirstElement = indexOfLastElem - itemsPerPage;
  const visibleitems = item.slice(indexofFirstElement, indexOfLastElem);

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
