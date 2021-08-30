import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <ul className="nav-list">
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/Messagerie">
                <li>Messagerie</li>
            </Link>
            <Link to="/MonFil">
                <li>Mon Fil</li>
            </Link>
            <Link to="/Carte">
                <li>Carte</li>
            </Link>
            <Link to="/Parametres">
                <li>Parametres</li>
            </Link>
        </ul>
    )
}

export default Nav
