import React, {createContext, useState} from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = props => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    }

    if(darkMode) {
      document.body.classList.add('dark-body');
    } else {
      document.body.classList.remove('dark-body');
    }

    return (

        <ThemeContext.Provider value={{toggleDarkMode,darkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;