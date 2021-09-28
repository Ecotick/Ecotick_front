import React from 'react'
import './Component.css'
import './SignUp.css'
import facebook from './Ressources/facebook.png'
import github from './Ressources/github.png'
import google from './Ressources/google.png'
import { Link } from "react-router-dom";



function Login() {

    return (
      <div>
        <form className="bloc-form">
          
          <h2>Login</h2>
          <p className="already-txt">Not a member yet ? <Link to='/SignUp'>Sign Up</Link></p>
          
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="name@mail.com" />
          
          <label htmlFor="psw">Mot de passe</label>
          <input type="password" id="psw" placeholder="6 characters min" />
          
          <button className="signup-btn">Create an account</button>
          <p className="others-signup">Or sign up with :</p>
          
          <button type="button" className="others-signup-btn">
            <img src={google} alt="logo-google"/>
          </button>
          
          <button type="button" className="others-signup-btn">
            <img src={github} alt="logo-github" />
          </button>
          
          <button type="button" className="others-signup-btn">
            <img src={facebook} alt="logo-facebook" />
          </button>
        
        </form>
      </div>
    )
}

export default Login