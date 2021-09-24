import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Service Worker registration
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js')
    .then(console.log("Service Worker is running"))
    .catch(err => console.error)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

