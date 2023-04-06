import Wrapper from "../assets/wrappers/Dashboard";
import NavBar from "../app/NavBar";
import { Outlet } from "react-router-dom";

export default function DashboardPage() {
  return (
    <Wrapper>
      <section className="main-container">
        <NavBar />
        <div className="outlet-container">
          <Outlet />
        </div>
      </section>
    </Wrapper>
  );
}
