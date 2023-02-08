import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './containers/App';
import styles from "./containers/App/App.module.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <h1 >
          hello
      </h1>
  </React.StrictMode>
);
