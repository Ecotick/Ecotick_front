import React, {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import BtnDarkMode from './BtnDarkMode';

function Carte() {

  const {darkMode} = useContext(ThemeContext)

  console.log(darkMode);

    return (
        <div>
            <h1>Hello from Carte</h1>
            <BtnDarkMode />
        </div>
    )
}

export default Carte
