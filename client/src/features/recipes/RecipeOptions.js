import Wrapper from "../../assets/wrappers/RecipeOptions";
import { useDispatch } from "react-redux";
import { useDeleteRecipeMutation } from "../api/apiSlice";

export default function RecipeOptions({
  recipeId,
  columnDisplay,
  showOptions,
}) {
  const dispatch = useDispatch();
  const [deleteRecipe] = useDeleteRecipeMutation();

  const handleClick = () => {
    dispatch(deleteRecipe({ recipeId }));
    showOptions();
  };
  return (
    <Wrapper>
      <aside
        className={`options ${columnDisplay ? "options-column-display" : ""}`}
        onClick={handleClick}
      >
        <div className="single-option" onClick={handleClick}>
          Delete
        </div>
      </aside>
    </Wrapper>
  );
}
