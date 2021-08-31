import React, {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import BtnDarkMode from './BtnDarkMode';

function Parametres() {

  const {darkMode} = useContext(ThemeContext)

  console.log(darkMode);

    return (
        <div>
            <h1>Hello from parametres</h1>
            <BtnDarkMode />
        </div>
    )
}

export default Parametres
