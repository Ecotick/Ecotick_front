import React, {useContext}from 'react'
import {ThemeContext} from '../context/ThemeContext'
import BtnDarkMode from './BtnDarkMode';


function Messagerie() {

  const {darkMode} = useContext(ThemeContext)

  console.log(darkMode);

    return (
        <div>
            <h1>Welcome to messagerie</h1>
            <BtnDarkMode />
        </div>
    )
}

export default Messagerie
