import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' 

import '@material/react-text-field/dist/text-field.css'
import '@material/react-material-icon/dist/material-icon.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
