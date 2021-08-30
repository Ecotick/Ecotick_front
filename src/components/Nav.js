/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
// import logo from '../utilisateur.png';

function Nav() {
    return (
        <ul className="nav-list">
            <Link to="/">
                <img src="https://image.flaticon.com/icons/png/512/483/483361.png"  style= {{width:"50px",height:"50px"}}/>
                {/* <li>Home</li> */}
            </Link>
            <Link to="/Messagerie">
                <img src="https://image.flaticon.com/icons/png/512/482/482948.png"  style= {{width:"50px",height:"50px"}}/>
                {/*<li>Messagerie</li>*/}
            </Link>
            <Link to="/MonFil">
                <img src="https://image.flaticon.com/icons/png/512/522/522511.png" style= {{width:"50px",height:"50px"}} />
                {/*<li>Mon Fil</li>*/}
            </Link>
            <Link to="/Carte">
                <img src="https://image.flaticon.com/icons/png/512/484/484175.png" style= {{width:"50px",height:"50px"}}/>
                {/*<li>Carte</li>*/}
            </Link>
            <Link to="/Parametres">
                <img src="https://image.flaticon.com/icons/png/512/483/483390.png" style= {{width:"50px",height:"50px"}}/>
                {/*<li>Parametres</li>*/}
            </Link>
        </ul>
    )
}

export default Nav

