import { Route, Routes } from "react-router-dom";
import PageCompany from "./pages/Dashboard_Company";
import PagePublic from "./pages/PagePublic";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PagePublic />} />
      <Route path="company" element={<PageCompany />} />
    </Routes>
  );
};

export default MainRoutes
