import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ProtectRoute from "./components/ProtectRoute";
import PageCompany from "./pages/Dashboard_Company";
import Donation from "./pages/Dashboard_Company/Donation";
import PageFundraising from "./pages/Dashboard_Company/Fundraising";
import PageUser from "./pages/Dashboard_User";
import PagePublic from "./pages/PagePublic";
import RegisterPage from "./pages/Register_User";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<PagePublic />} />
      <Route path="*" element={<PagePublic />} />
      <Route element={<ProtectRoute />}>
        <Route path="/user" element={<PageUser />} />
        <Route path="/company" element={<PageCompany />} />
        <Route path="/company/fundraising" element={<PageFundraising />} />
        <Route path="/company/donation" element={<Donation />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
