import './App.css';
import NavRoutes from './components/Navigation/NavRoutes'
import ThemeContextProvider from './context/ThemeContext'


function App() {

  return (
    <>
    <ThemeContextProvider>
        <NavRoutes />
    </ThemeContextProvider>
    </>
    );
}

export default App;
