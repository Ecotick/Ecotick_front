import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "./Firebase/AuthContext";
import "./Component.css";
import "./Logging.css";
import facebook from './Ressources/facebook2.png'
import twitter from './Ressources/twitter.png'
import google from './Ressources/google.png'

function SignUp() {
  const [error, setError] = useState('');
  const history = useHistory();
  const {signUp} = useContext(AuthContext);

  const data = {
    pseudo: "",
    email: "",
    psw: "",
    confirmpsw: "",
  };

  const [loginData, setLoginData] = useState(data);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, psw } = loginData;
      signUp(email, psw)
      .then((user) => {
        console.log(user)
        history.push('/monfil')
        setLoginData({ ...data });
      })
        .catch((error) => {
        setError(error);
      });
  };

  const { pseudo, email, psw, confirmpsw } = loginData;

  const btn =
    pseudo === "" || email === "" || psw === "" || psw !== confirmpsw ? (
      <button className="signup-btn-disable" disabled>
        Créer un compte
      </button>
    ) : (
      <button className="signup-btn">Créer un compte</button>
    );

  //gestion erreurs
  const errorMsg = error !== '' && <span style={{"color": "red"}}>{error.message}</span>

  return (
    <div>
      <form className="bloc-form" onSubmit={handleSubmit}>
        <h2>S'inscrire</h2>
        <p className="already-txt">
          Déja membre ? <Link to="/Login">Se connecter</Link>
        </p>

        {errorMsg}

        <label htmlFor="pseudo">Pseudo</label>
        <input
          onChange={handleChange}
          value={pseudo}
          type="text"
          id="pseudo"
          placeholder="pseudo"
        />

        <label htmlFor="email">E-mail</label>
        <input
          onChange={handleChange}
          value={email}
          type="email"
          id="email"
          placeholder="name@mail.com"
        />

        <label htmlFor="psw">Mot de passe</label>
        <input
          onChange={handleChange}
          value={psw}
          type="password"
          id="psw"
          placeholder="6 characters min"
        />

        <label htmlFor="confirmpsw">Confirmer le mot de passe</label>
        <input
          onChange={handleChange}
          value={confirmpsw}
          type="password"
          id="confirmpsw"
          placeholder="6 characters min"
        />

        {btn}
        {/* <button className="signup-btn">Create an account</button> */}

          <p className="others-signup">ou s'incrire avec :</p>
          
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
  );
}

export default SignUp;
