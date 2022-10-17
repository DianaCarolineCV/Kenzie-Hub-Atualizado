import { Routes, Route } from "react-router-dom";
import DashboardPage from "../components/Dashboard";
import LoginPage from "../components/Login";
import NotFoundPage from "../components/NotFoundPages";
import RegistrationPage from "../components/Registration";
import ProtectedRoutes from "../components/ProtectedRoutes";

function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RoutePages;
