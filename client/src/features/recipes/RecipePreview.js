import Wrapper from "../../assets/wrappers/RecipePreview";
import { GiWineBottle } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import RecipeOptions from "./RecipeOptions";
import { useState } from "react";

export default function RecipePreview({
  name,
  ingredients,
  id,
  columnDisplay,
}) {
  const [showOptions, setShowOptions] = useState(false);

  let ingString = "";
  ingredients.map((ingredient) => {
    ingString = ingString.concat(" ").concat(ingredient);
    return ingString;
  });
  if (ingString.length > 35) {
    ingString = ingString.slice(0, 34);
    ingString = ingString.concat(" ...");
  }

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <Wrapper>
      <aside className="container">
        <section
          className={`recipe-card ${
            columnDisplay ? "recipe-card-column-display" : ""
          }`}
        >
          <div
            className={`icon-container ${
              columnDisplay ? "icon-container-column-display" : ""
            }`}
          >
            <Link
              to={`/dashboard/single-recipe/${id}`}
              className={`link icon-container ${
                columnDisplay ? "icon-container-column-display" : ""
              }`}
            >
              <GiWineBottle size={50} />
            </Link>
          </div>

          <div
            className={`recipe ${columnDisplay ? "recipe-column-display" : ""}`}
          >
            <Link
              to={`/dashboard/single-recipe/${id}`}
              className={`link name ${
                columnDisplay ? "name-column-display" : ""
              }`}
            >
              {name}
            </Link>

            <Link
              to={`/dashboard/single-recipe/${id}`}
              className={`link ingredients ${
                columnDisplay ? "ingredients-column-display" : ""
              }`}
            >
              {ingString}
            </Link>

            <div
              className={`dots ${columnDisplay ? "dots-column-display" : ""}`}
              onClick={handleClick}
            >
              <BsThreeDotsVertical size={25} />
            </div>
          </div>
        </section>

        {showOptions && (
          <div className="options-container">
            {" "}
            <RecipeOptions
              recipeId={id}
              columnDisplay={columnDisplay}
              showOptions={handleClick}
            />
          </div>
        )}
      </aside>
    </Wrapper>
  );
}
