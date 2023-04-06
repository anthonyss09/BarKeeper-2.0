import Wrapper from "../assets/wrappers/LandingPage";
import { GiGlassShot } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await loginUser({
        email: "test@gmail.com",
        password: "123456",
      });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <section className="main-section page">
        <div className="overlay-div">
          <div className="center-div">
            {" "}
            <div className="about">
              <div className="title">
                Bar
                <GiGlassShot size={50} />
                Keeper
              </div>
              <div className="text">
                Your book is a space to save cocktail recipes.
                <br /> Happy pouring.
              </div>
            </div>
            <div className="buttons">
              <Link to="/register" className="button link create-button">
                Create / Open book
              </Link>
              <div className="button demo-button link" onClick={handleClick}>
                Demo app
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
