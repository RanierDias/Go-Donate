import MainRoutes from "./routes";
import GlobalStyle from "./styles/globalStyles";
import Reset from "./styles/reset";
import { UserProvider } from "./providers/UserContext/UserContextInitial";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <UserProvider>
        <MainRoutes />
      </UserProvider>
    </>
  );
}

export default App;
