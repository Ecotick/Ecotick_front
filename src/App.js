import "./App.css";
import NavRoutes from "./components/Navigation/NavRoutes";
import ThemeContextProvider from "./context/ThemeContext";
import SidebarContextProvider from "./context/SidebarContext";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div id="app" className="displayGround">
      <CssBaseline />
      <ThemeContextProvider>
        <SidebarContextProvider>
          <NavRoutes />
        </SidebarContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
