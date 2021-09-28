import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import {config} from './AccessFirebase';




class Firebase {
  constructor(){
    app.initializeApp(config);
    this.auth = app.auth();
  }

  //inscription method
  // signupUser = (email, password) => {
  //   this.auth.createUserWithEmailAndPassword(email, password);
  // }

  signupUser(email, psw) {
    // [START auth_signup_password]
    app.auth().createUserWithEmailAndPassword(email, psw)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
      });

    // [END auth_signup_password]
  }
  

  //connexion method
  loginUser = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  //deconnexion method
  signOutUser = () => {
    this.auth.signOut()
  }

}

export default Firebase;