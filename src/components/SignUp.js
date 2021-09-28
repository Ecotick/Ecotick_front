import React, {useState, useContext} from 'react'
import { Link } from "react-router-dom";
import './Component.css'
import './SignUp.css'
// import facebook from './Ressources/facebook.png'
// import github from './Ressources/github.png'
// import google from './Ressources/google.png'
import { FirebaseContext } from './Firebase'


function SignUp() {

  const firebase = useContext(FirebaseContext);

  const data = {
    pseudo:'',
    email:'',
    psw:'',
    confirmpsw:''
  }

  const [loginData, setLoginData] = useState(data);
 
  const [error, setError] = useState('')

  const handleChange = e => {
    setLoginData({...loginData, [e.target.id]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const { email, psw } = loginData;
    firebase.signupUser(email, psw)
    .then(user => {
      setLoginData({...data});
    })
    .catch(error => {
      setError(error);
      setLoginData({...data});
    })
  }

  const { pseudo, email, psw, confirmpsw } = loginData;

  const btn = pseudo === '' || email === '' || psw === '' || psw !== confirmpsw
  ? <button className="signup-btn-disable" disabled>Create an account</button> : <button className="signup-btn">Create an account</button>

  //gestion erreurs
  const errorMsg = error !== '' && <span>{error.message}</span>

    return (
      <div>
        <form className="bloc-form" onSubmit={handleSubmit}>
          
          {errorMsg}
          <h2>Sign Up</h2>
          <p className="already-txt">Already a member ? <Link to='/Login'>Login</Link></p>
          
          <label htmlFor="pseudo">Pseudo</label>
          <input onChange={handleChange} value={pseudo} type="text" id="pseudo" placeholder="pseudo" />

          <label htmlFor="email">E-mail</label>
          <input onChange={handleChange} value={email} type="email" id="email" placeholder="name@mail.com" />
          
          <label htmlFor="psw">Mot de passe</label>
          <input onChange={handleChange} value={psw} type="password" id="psw" placeholder="6 characters min" />

          <label htmlFor="confirmpsw">Confirmer le mot de passe</label>
          <input onChange={handleChange} value={confirmpsw} type="password" id="confirmpsw" placeholder="6 characters min" />
          
          {btn}
          {/* <button className="signup-btn">Create an account</button>
          <p className="others-signup">Or sign up with :</p>
          
          <button type="button" className="others-signup-btn">
            <img src={google} alt="logo-google"/>
          </button>
          
          <button type="button" className="others-signup-btn">
            <img src={github} alt="logo-github" />
          </button>
          
          <button type="button" className="others-signup-btn">
            <img src={facebook} alt="logo-facebook" />
          </button> */}
        
        </form>
      </div>
    )
}

export default SignUp
