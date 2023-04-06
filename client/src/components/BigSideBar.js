import Wrapper from "../assets/wrappers/BigSideBar";
import { NavLink } from "react-router-dom";

export default function BigSideBar({ handleLogout, handleClick }) {
  return (
    <Wrapper>
      <div className="side-bar">
        <div className="items-container">
          {" "}
          <div className="item" onClick={handleClick}>
            {" "}
            <NavLink to="/dashboard" className="link">
              All recipes
            </NavLink>
          </div>
          <div className="item" onClick={handleClick}>
            {" "}
            <NavLink to="/dashboard/create" className="link">
              Create
            </NavLink>
          </div>
          <div className="item" onClick={handleLogout}>
            logout
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
