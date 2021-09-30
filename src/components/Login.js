import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "./Firebase/AuthContext";
import './Component.css'
import './SignUp.css'
import facebook from './Ressources/facebook2.png'
import twitter from './Ressources/twitter.png'
import google from './Ressources/google.png'

function Login() {
  const [error, setError] = useState('');
  const history = useHistory();
  const {login} = useContext(AuthContext);

  const data = {
    email: "",
    psw: ""
  };
  
  const [loginData, setLoginData] = useState(data);
  
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, psw } = loginData;
    login(email, psw)
    .then((user) => {
      console.log(user)
      history.push('/monfil')
      setLoginData({ ...data });
    })
    .catch((error) => {
      setError(error);
    });
  };
  
  const { email, psw } = loginData;

  const btn =
  email === "" || psw === "" ? (
    <button className="signup-btn-disable" disabled>
      Se connecter
    </button>
  ) : (
    <button className="signup-btn">Se connecter</button>
  );
  
  //gestion erreurs
  const errorMsg = error !== '' && <span style={{"color": "red"}}>{error.message}</span>

    return (
      <div>
        <form className="bloc-form" onSubmit={handleSubmit}>
          
          <h2>Connexion</h2>
          <p className="already-txt">Pas encore membre ? <Link to='/SignUp'>S'inscrire</Link></p>

          {errorMsg}

          <label htmlFor="email">E-mail</label>
          <input onChange={handleChange} value={email} type="email" id="email" placeholder="name@mail.com" />
          
          <label htmlFor="psw">Mot de passe</label>
          <input onChange={handleChange} value={psw} type="password" id="psw" placeholder="6 characters min" />
          
          {btn}
          {/* <button className="signup-btn">Se connecter</button> */}

          <p className="others-signup">Ou se connecter avec :</p>
          
          <button type="button" className="others-signup-btn">
            <img src={google} alt="logo-google"/>
          </button>
          
          <button type="button" className="others-signup-btn">
            <img src={twitter} alt="logo-github" />
          </button>
          
          <button type="button" className="others-signup-btn">
            <img src={facebook} alt="logo-facebook" />
          </button>
        
        </form>
      </div>
    )
}

export default Login