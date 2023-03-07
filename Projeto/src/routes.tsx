import { Route, Routes } from "react-router-dom";
import PageCompany from "./pages/dashboard_company";
import PageFundraising from "./pages/dashboard_company/Fundraising";
import PageUser from "./pages/Dashboard_User";
import PagePublic from "./pages/PagePublic";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PagePublic />} />
      <Route path="company" element={<PageCompany />} />
      <Route path="user" element={<PageUser />} />
      <Route path="/company" element={<PageCompany />} />
      <Route path="/company/fundraising" element={<PageFundraising />} />
    </Routes>
  );
};

export default MainRoutes;
