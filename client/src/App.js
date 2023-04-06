import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./features/auth/RegisterPage";
import LoginPage from "./features/auth/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AllRecipes from "./features/recipes/AllRecipes";
import CreateForm from "./components/CreateForm";
import SingleRecipe from "./features/recipes/SingleRecipe";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="register" element={<RegisterPage />} />
          <Route exact path="login" element={<LoginPage />} />
          <Route
            exact
            path="dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          >
            <Route index element={<AllRecipes />} />
            <Route path="create" element={<CreateForm />} />
            <Route path="single-recipe/:id" element={<SingleRecipe />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
