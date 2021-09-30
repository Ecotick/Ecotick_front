import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AuthProvider} from './components/Firebase/AuthContext'
// import Firebase, {FirebaseContext} from './components/Firebase';

ReactDOM.render(
  <AuthProvider>
      <App />
  </AuthProvider>,
  document.getElementById('root')
);

