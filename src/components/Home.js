import React, {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import BtnDarkMode from './BtnDarkMode';

function Home() {

  const {darkMode} = useContext(ThemeContext)

  console.log(darkMode);

    return (
        <div>
            <h1>Bienvenue sur l'accueil</h1>
            <BtnDarkMode />
        </div>
    )
}

export default Home
