import React, {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import BtnDarkMode from './BtnDarkMode';

function MonFil() {

    const {darkMode} = useContext(ThemeContext)

    return (
        <div>
            <h1>Hello from mon fil</h1>
            <BtnDarkMode />
        </div>
    )
}

export default MonFil
