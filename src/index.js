import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./components/Firebase/AuthContext";
import { StrictMode } from "react/cjs/react.development";
// import Firebase, {FirebaseContext} from './components/Firebase';

ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
  document.getElementById("root")
);
