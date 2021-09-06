import React, {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import BtnDarkMode from './DarkMode/BtnDarkMode';
import './Component.css'

function Parametres() {

  const {darkMode} = useContext(ThemeContext)

  console.log(darkMode);

    return (
        <div>
            <h1>Parametres</h1>
            <BtnDarkMode />
        </div>
    )
}

export default Parametres
