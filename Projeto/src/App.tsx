import { ToastContainer } from "react-toastify";
import MainRoutes from "./routes";
import GlobalStyle from "./styles/globalStyles";
import Reset from "./styles/reset";
import { UserProvider } from "./providers/UserContext/UserContextInitial";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Reset />
      <GlobalStyle />
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </>
  );
}

export default App;
