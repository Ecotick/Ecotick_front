import './App.css';
import NavRoutes from './components/Navigation/NavRoutes'
import ThemeContextProvider from './context/ThemeContext'


function App() {

  return (
    <div className="displayGround">
    <ThemeContextProvider>
        <NavRoutes />
    </ThemeContextProvider>
    </div>
    );
}

export default App;
