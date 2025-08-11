import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/home/home";
import Register from "../views/register/register";
import PageNotFound from "../views/404/404";
import Login from "../views/login/login";
import LandingPage from "../views/landing-page/landing-page";
import ProtectedRoute from "../components/ProtectedRoutes";
import CreateJob from "../views/create-job/create-job";
import EditJob from "../views/edit-job/edit-job";

export default function AppRoutes() {
  const userInformation = localStorage.getItem("user");
  const isLoggedIn = userInformation ? JSON.parse(userInformation) : null;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/landing-page" replace /> : <Home />}   />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/create-job" element={<CreateJob />} />
            <Route path="/edit-job/:id" element={<EditJob />} />

        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
