import { useParams } from "react-router-dom";
import { useGetRecipeQuery } from "../api/apiSlice";
import CreateForm from "../../components/CreateForm";

export default function RecipePage({ id }) {
  const { id: recipeId } = useParams();

  const { data, isLoading } = useGetRecipeQuery(recipeId);

  let content;

  if (isLoading) {
    content = <div>loading recipe...</div>;
  } else {
    content = (
      <CreateForm
        name={data.name}
        ingredients={data.ingredients}
        instructions={data.instructions}
      />
    );
  }

  return <div>{content}</div>;
}
