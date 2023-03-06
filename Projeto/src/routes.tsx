import { Route, Routes } from "react-router-dom";
import PageCompany from "./pages/dashboard_company";
import PagePublic from "./pages/public";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PagePublic />} />
      <Route path="company" element={<PageCompany />} />
    </Routes>
  );
};

export default MainRoutes
