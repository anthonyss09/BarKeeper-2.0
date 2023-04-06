import Wrapper from "../../assets/wrappers/Ingredients";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIngredients,
  addIngredient,
  addInput,
  removeIngredient,
} from "./recipeSlice";

export default function Ingredients() {
  const dispatch = useDispatch();
  const globalIngredients = useSelector(selectIngredients);

  const handleIngredientChange = (e) => {
    const value = e.target.value;
    const index = e.target.id;
    dispatch(addIngredient({ index: index, ingredient: value }));
    if (index == globalIngredients.length - 1) {
      dispatch(addInput());
    }
  };

  const handleInputOff = (e) => {
    const value = e.target.value;
    const index = e.target.id;
    if (!value && globalIngredients.length > 3) {
      dispatch(removeIngredient({ index: index }));
    }
  };

  let content = globalIngredients.map((ingredient, index) => {
    return (
      <input
        key={index}
        id={index}
        value={ingredient}
        name="Ingredient"
        className="ingredient-input"
        onChange={handleIngredientChange}
        onBlur={handleInputOff}
      />
    );
  });

  return (
    <Wrapper>
      <section>
        {" "}
        <label htmlFor="Ingredients" className="ingredients-label">
          Ingredients
        </label>
        <aside id="Ingredients" className="ingredients-main">
          {content}
        </aside>
      </section>
    </Wrapper>
  );
}
