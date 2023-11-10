import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calculator from './Calculator';
import Sprav from './Sprav'

const root = ReactDOM.createRoot(document.getElementById('root'));
const calc = ReactDOM.createRoot(document.getElementById('Calculator'))
const Spravi = ReactDOM.createRoot(document.getElementById('Sprav'))
root.render(
    <App />
);
calc.render(
    <Calculator />
);
Spravi.render(
    <Sprav />
)


reportWebVitals();