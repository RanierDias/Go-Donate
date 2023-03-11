import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ProtectRoute from "./components/ProtectRoute";
import PageCompany from "./pages/Dashboard_Company";
import Donation from "./pages/Dashboard_Company/Donation";
import PageFundraising from "./pages/Dashboard_Company/Fundraising";
import PageUser from "./pages/Dashboard_User";
import PageParticipations from "./pages/Dashboard_User/Participation";
import PagePublic from "./pages/PagePublic";
import Home from "./pages/PagePublic/Home";
import RegisterPage from "./pages/Register_User";
import { CompanyProvider } from "./providers/CompanyContext";
import { UserProvider } from "./providers/UserContext/UserContextInitial";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <CompanyProvider>
            <PagePublic />
          </CompanyProvider>
        }
      />
      <Route path="*" element={<Home />} />
      <Route path="/homepage" element={<Home />} />
      <Route element={<ProtectRoute />}>
        <Route
          path="/user"
          element={
            <CompanyProvider>
              <PageUser />
            </CompanyProvider>
          }
        />
        <Route
          path="/user/participation"
          element={
            <CompanyProvider>
              <PageParticipations />
            </CompanyProvider>
          }
        />
        <Route
          path="/company"
          element={
            <CompanyProvider>
              <UserProvider>
                <PageCompany />
              </UserProvider>
            </CompanyProvider>
          }
        />
        <Route
          path="/company/fundraising"
          element={
            <CompanyProvider>
              <UserProvider>
                <PageFundraising />
              </UserProvider>
            </CompanyProvider>
          }
        />
        <Route
          path="/company/donation"
          element={
            <CompanyProvider>
              <Donation />
            </CompanyProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
