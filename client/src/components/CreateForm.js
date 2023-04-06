import Wrapper from "../assets/wrappers/CreateForm";
import CreateRow from "./CreateRow";
import Ingredients from "../features/recipes/Ingredients";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCreateRecipeMutation } from "../features/api/apiSlice";
import {
  addIngredient,
  setName,
  setInstructions,
  selectName,
  selectIngredients,
  selectInstructions,
  clearValues,
} from "../features/recipes/recipeSlice";
import { selectCurrentUser } from "../features/auth/authSlice.js";
import { clearAlert } from "../features/alerts/alertsSlice";
import { selectAlertsInfo } from "../features/alerts/alertsSlice";
import Alert from "../features/alerts/Alert";
import { GiWineBottle } from "react-icons/gi";
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function CreateForm(props) {
  const dispatch = useDispatch();
  const [createRecipe] = useCreateRecipeMutation();
  const { id } = useParams();

  const name = useSelector(selectName);
  const ingredients = useSelector(selectIngredients);
  const instructions = useSelector(selectInstructions);
  const { _id } = useSelector(selectCurrentUser);
  const { showAlert, alertType, alertMessage } = useSelector(selectAlertsInfo);

  useEffect(() => {
    dispatch(clearValues());
    if (id) {
      dispatch(setName(props.name));
      props.ingredients.map((ingredient, index) => {
        dispatch(addIngredient({ ingredient: ingredient, index: index }));
      });
      dispatch(setInstructions(props.instructions));
    }
  }, []);

  const handleNameChange = (e) => {
    const value = e.target.value;
    dispatch(setName(value));
  };
  const handleInstructionsChange = (e) => {
    const value = e.target.value;
    dispatch(setInstructions(value));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    createRecipe({
      name,
      ingredients,
      instructions,
      createdBy: _id,
      recipeId: id,
    });

    dispatch(clearValues());
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
  };

  return (
    <Wrapper>
      <Link to="/dashboard" className="back-arrow link">
        {" "}
        <TbArrowBackUp size={40} />
      </Link>
      <section className="container">
        {showAlert && (
          <Alert alertType={alertType} alertMessage={alertMessage} />
        )}
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="main">
            <div className="icon">
              {" "}
              <GiWineBottle size={80} />
            </div>
            <CreateRow name="name" value={name} onChange={handleNameChange} />
            <Ingredients />
            <div className="create-text-row">
              <label htmlFor="instructions" className="create-label">
                instructions
              </label>
              <textarea
                name="instructions"
                value={instructions}
                rows="6"
                className="text-area"
                onChange={handleInstructionsChange}
              ></textarea>
            </div>
            <button className="button create-button">Save recipe</button>
          </div>
        </form>
      </section>
    </Wrapper>
  );
}
