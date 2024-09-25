import { HexaRouter, HexaRoutes, HexaRoute } from "./components/router";
import { ThemeProvider } from "./components/theme";

import TestePage from "./views/teste";

function App() {
  return (
    <>
      <HexaRouter>
        <HexaRoutes>
          <ThemeProvider>
            <HexaRoute path={"/"} element={<TestePage />} />
          </ThemeProvider>
        </HexaRoutes>
      </HexaRouter>
    </>
  );
}

export default App;
