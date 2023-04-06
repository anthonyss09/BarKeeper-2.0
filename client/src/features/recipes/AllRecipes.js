import Wrapper from "../../assets/wrappers/AllRecipes";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";
import { useGetAllRecipesQuery } from "../api/apiSlice";
import RecipePreview from "./RecipePreview";
import TaskBar from "../../components/TaskBar";
import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination";
import { selectColumnDisplay, setColumnDisplay } from "./recipeSlice";

export default function AllRecipes() {
  const [sort, setSort] = useState("a-z");
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();

  const columnDisplay = useSelector(selectColumnDisplay);

  const user = useSelector(selectCurrentUser);

  const userId = user._id;
  const { data, error, isLoading, refetch } = useGetAllRecipesQuery({
    createdBy: userId,
    sort: sort,
    searchQuery: searchQuery,
    pageNumber: pageNumber,
  });

  const handleDisplay = (bool) => {
    dispatch(setColumnDisplay(bool));
  };

  const handleSortOption = (sortOption) => {
    setSort(sortOption);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handlePageIncrement = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePageDecrement = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber(pageNumber - 1);
  };

  const handleToFirstPage = () => {
    setPageNumber(1);
  };

  let content;
  let numOfPages;

  useEffect(() => {
    refetch();
  }, [sort, searchQuery]);

  if (isLoading) {
    content = <div>loading recipes...</div>;
  } else if (data.recipes.length) {
    numOfPages = data.numOfPages;
    content = data.recipes.map((recipe, index) => {
      return (
        <div className={columnDisplay && "preview-container"} key={index}>
          <RecipePreview
            key={index}
            name={recipe.name}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            id={recipe._id}
            columnDisplay={columnDisplay}
          />
        </div>
      );
    });
  } else {
    content = (
      <div className="no-items">No recipes to display, get pourin...</div>
    );
  }

  return (
    <Wrapper>
      <section className="main">
        <TaskBar
          handleDisplay={handleDisplay}
          handleSortOption={handleSortOption}
          handleSearchChange={handleSearchChange}
        />

        <div className="container-title">
          page {pageNumber} of {numOfPages}
        </div>
        <section
          className={`recipes-container ${
            columnDisplay && "recipes-container-column-display"
          }`}
        >
          {content}
        </section>
        <Pagination
          columnDisplay={columnDisplay}
          pageNumber={pageNumber}
          handlePageDecrement={handlePageDecrement}
          handlePageIncrement={handlePageIncrement}
          handleToFirstPage={handleToFirstPage}
          numOfPages={numOfPages}
        />
      </section>
    </Wrapper>
  );
}
