import Wrapper from "../../assets/wrappers/CreateForm";
import CreateRow from "../../components/CreateRow";
import { GiGlassShot } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function RegisterForm({
  handleEmailChange,
  handlePasswordChange,
  handleLogin,
}) {
  return (
    <Wrapper>
      <section className="container">
        {" "}
        <form className="create-form" onSubmit={handleLogin}>
          <div className="main">
            <div className="header">
              {" "}
              Bar
              <GiGlassShot size={30} /> Keeper
            </div>
            <CreateRow
              name="Email"
              id="Email"
              type="text"
              onChange={handleEmailChange}
            />
            <CreateRow
              name="Password"
              id="Password"
              type="text"
              onChange={handlePasswordChange}
            />
            <button className="create-button button register-button">
              Open book
            </button>
            <div>
              Don't have a book?{" "}
              <Link to="/register" className="link register-link">
                Create
              </Link>
            </div>
          </div>
        </form>
      </section>
    </Wrapper>
  );
}
