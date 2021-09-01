import React, {useContext} from 'react'
import './BtnDarkMode.css'
import {ThemeContext} from '../context/ThemeContext';

function BtnDarkMode() {

  const {toggleDarkMode} = useContext(ThemeContext)

  return (

    <button
    onClick={toggleDarkMode}
    className="btn-darkmode">Dark Mode</button>
      
  )
}

export default BtnDarkMode