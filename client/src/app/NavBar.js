import Wrapper from "../assets/wrappers/NavBar";
import { GiGlassShot } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { clearValues } from "../features/recipes/recipeSlice";
import { useDispatch } from "react-redux";
import { FaBars, FaUserCircle } from "react-icons/fa";
import BigSideBar from "../components/BigSideBar";
import { useState } from "react";
import { logoutUser } from "../features/auth/authSlice";

export default function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(clearValues());
    setShowSideBar(!showSideBar);
  };

  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Wrapper>
      <nav className="nav-bar">
        {showSideBar && (
          <BigSideBar handleLogout={handleLogout} handleClick={handleClick} />
        )}
        <div className="nav-item nav-menu-bars" onClick={handleSideBar}>
          <FaBars size={20} />
        </div>
        <div className="nav-header link">
          Bar
          <GiGlassShot size={30} /> Keeper
        </div>
        <div className="nav-item user-container" onClick={handleLogout}>
          {" "}
          <div className="user-circle">
            {" "}
            <FaUserCircle size={30} />
          </div>
          <div className="logout" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}
