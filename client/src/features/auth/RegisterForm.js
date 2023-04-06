import Wrapper from "../../assets/wrappers/CreateForm";
import CreateRow from "../../components/CreateRow";
import { GiGlassShot } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function RegisterForm({
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleRegister,
}) {
  return (
    <Wrapper>
      <section className="container">
        {" "}
        <form className="create-form" onSubmit={handleRegister}>
          <div className="main">
            <h1 className="header">
              {" "}
              Bar
              <GiGlassShot size={30} /> Keeper
            </h1>
            <CreateRow
              name="FirstName"
              id="First Name"
              type="text"
              onChange={handleFirstNameChange}
            />
            <CreateRow
              name="LastName"
              id="Last Name"
              type="text"
              onChange={handleLastNameChange}
            />
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
            <button className="button create-button register-button">
              Create book
            </button>
            <div>
              Have a book?{" "}
              <Link to="/login" className="link register-link">
                Open
              </Link>
            </div>
          </div>
        </form>
      </section>
    </Wrapper>
  );
}
