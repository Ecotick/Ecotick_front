import { AuthContext } from "./Firebase/AuthContext";
import React, { useContext } from "react";
import { useHistory } from "react-router";

import './Logging.css'

function LogOut() {
  const {logout, user} = useContext(AuthContext);
  const history = useHistory();

  const handleSigninBtn = () => history.push('/login');

    if (user) {
      console.log(user)
      return (
      <div className="bloc-form">
        <h2>Connecté en tant que : {user.email}</h2>

        <button className="signup-btn" onClick={logout}>Se déconnecter</button>
      </div>
    )}
    else return (
      <div className="bloc-form">
        <h2>Vous êtes déconnecté...</h2>

        <button className="signup-btn" onClick={handleSigninBtn}>Se connecter</button>
      </div>
    )

  // return (
  //   <div>
  //     {user ? user : "Vous êtes déconnecté"}
  //   </div>
  // )
}

export default LogOut
