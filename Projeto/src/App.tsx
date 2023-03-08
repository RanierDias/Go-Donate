import MainRoutes from "./routes";
import GlobalStyle from "./styles/globalStyles";
import Reset from "./styles/reset";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <MainRoutes />
    </>
  );
}

export default App;
