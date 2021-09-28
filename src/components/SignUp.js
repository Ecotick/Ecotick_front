import React from 'react'
import { Link } from "react-router-dom";
import './Component.css'
import './SignUp.css'
import facebook from './Ressources/facebook.png'
import github from './Ressources/github.png'
import google from './Ressources/google.png'

function SignUp() {

    return (
      <div>
        <form className="bloc-form">
          
          <h2>Sign Up</h2>
          <p className="already-txt">Already a member ? <Link to='/Login'>Login</Link></p>
          
          <label htmlFor="pseudo">Pseudo</label>
          <input type="text" id="pseudo" placeholder="pseudo" />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="name@mail.com" />
          
          <label htmlFor="psw">Mot de passe</label>
          <input type="password" id="psw" placeholder="6 characters min" />

          <label htmlFor="confirmpsw">Confirmer le mot de passe</label>
          <input type="password" id="confirmpsw" placeholder="6 characters min" />
          
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

export default SignUp
