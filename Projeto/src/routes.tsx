import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ProtectRoute from "./components/ProtectRoute";
import PageCompany from "./pages/Dashboard_Company";
import Donation from "./pages/Dashboard_Company/Donation";
import PageFundraising from "./pages/Dashboard_Company/Fundraising";
import PageParticipants from "./pages/Dashboard_Company/Participants";
import PageUser from "./pages/Dashboard_User";
import PageParticipations from "./pages/Dashboard_User/Participation";
import PagePublic from "./pages/PagePublic";
import Home from "./pages/PagePublic/Home";
import RegisterPage from "./pages/Register_User";
import { PostProvider } from "./providers/PostContext";
import ModalProvider from "./providers/ModalContext";
import { UserProvider } from "./providers/UserContext/UserContextInitial";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/public"
        element={
          <PostProvider>
            <ModalProvider>
              <PagePublic />
            </ModalProvider>
          </PostProvider>
        }
      />
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route element={<ProtectRoute />}>
        <Route
          path="/user"
          element={
            <PostProvider>
              <UserProvider>
                <ModalProvider>
                  <PageUser />
                </ModalProvider>
              </UserProvider>
            </PostProvider>
          }
        />
        <Route
          path="/user/participation"
          element={
            <PostProvider>
              <UserProvider>
                <ModalProvider>
                  <PageParticipations />
                </ModalProvider>
              </UserProvider>
            </PostProvider>
          }
        />
        <Route
          path="/company"
          element={
            <PostProvider>
              <UserProvider>
                <ModalProvider>
                  <PageCompany />
                </ModalProvider>
              </UserProvider>
            </PostProvider>
          }
        />
        <Route
          path="/company/fundraising"
          element={
            <PostProvider>
              <UserProvider>
                <ModalProvider>
                  <PageFundraising />
                </ModalProvider>
              </UserProvider>
            </PostProvider>
          }
        />
        <Route
          path="/company/fundraising/participants"
          element={
            <PostProvider>
              <UserProvider>
                <ModalProvider>
                  <PageParticipants />
                </ModalProvider>
              </UserProvider>
            </PostProvider>
          }
        />
        <Route
          path="/company/donation"
          element={
            <PostProvider>
              <UserProvider>
                <ModalProvider>
                  <Donation />
                </ModalProvider>
              </UserProvider>
            </PostProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
