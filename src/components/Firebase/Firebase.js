import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import {config} from './AccessFirebase';


// const app = initializeApp(config);


class Firebase {
  constructor(){
    this.app = initializeApp(config);
    this.auth = getAuth();
  }

  //inscription method
    signupUser = (email, password) => {
      createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in 
        alert("SignUp Succed !")
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`SignUp failed ! --> error ${errorCode} ==> ${errorMessage}`)
      });
    }
  
  //connexion method
  loginUser = (email, password) => {
    signInWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
      // Signed in 
      console.log("Login Succed !")
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`login Failed ! --> error ${errorCode} ==> ${errorMessage}`)
    });
  }

  //deconnexion method
  signOutUser = () => {
    this.auth.signOut()
  }
}

export default Firebase;