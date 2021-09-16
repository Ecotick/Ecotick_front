import "./App.css";
import NavRoutes from "./components/Navigation/NavRoutes";
import ThemeContextProvider from "./context/ThemeContext";
import SidebarContextProvider from "./context/SidebarContext";

function App() {
  return (
    <div id="app" className="displayGround">
      <ThemeContextProvider>
        <SidebarContextProvider>
          <NavRoutes />
        </SidebarContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
