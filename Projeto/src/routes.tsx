import { Route, Routes } from "react-router-dom";
import PageCompany from "./pages/Dashboard_Company";
import PagePublic from "./pages/PagePublic";
import { UserContext } from "./providers/UserContext";

const MainRoutes = () => {
  return (
    // <UserContext>
      <Routes>
        <Route path="/" element={<PagePublic />} />
        <Route path="company" element={<PageCompany />} />
      </Routes>
    // </UserContext>
  );
};

export default MainRoutes
