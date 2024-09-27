import * as React from "react";
import { HexaRouter, HexaRoutes, HexaRoute } from "./components/router";
import { ThemeProvider } from "./components/theme";

const HomePage = React.lazy(() => import("./views/home"));

function App() {
  return (
    <>
      <React.Suspense fallback={<p>Carregando...</p>}>
        <HexaRouter>
          <HexaRoutes>
            <ThemeProvider>
              <HexaRoute path={"/"} element={<HomePage />} />
            </ThemeProvider>
          </HexaRoutes>
        </HexaRouter>
      </React.Suspense>
    </>
  );
}

export default App;
