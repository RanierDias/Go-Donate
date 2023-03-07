import { Route, Routes } from "react-router-dom";
import PageCompany from "./pages/Dashboard_Company";
import PageUser from "./pages/dashboard_user";
import PagePublic from "./pages/PagePublic";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PagePublic />} />
      <Route path="company" element={<PageCompany />} />
      <Route path="user" element={<PageUser />} />
    </Routes>
  );
};

export default MainRoutes
