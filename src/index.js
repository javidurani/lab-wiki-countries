import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import './components/Navbar.css'
import Navbar from './components/Navbar.js'
import CountryList from './components/CountryList.js'
import reactDom from 'react-dom';
import CountryDetails from './components/CountryDetails.js'


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <BrowserRouter>
    <CountryList />
  </BrowserRouter>,
  document.getElementById('root')
);

ReactDOM.render(
  <BrowserRouter>
    <CountryDetails />
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
