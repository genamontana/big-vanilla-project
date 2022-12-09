import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {sum} from './03-function/03';
import {User} from './06-callback,onClick,onChange,onBlur/06-callbacks';
//import {splitIntoWords} from './01-hello-tests/01';

//Первое занятие по JS Native c Димычем
/*const sentense = "Hello my friend!"
const result = splitIntoWords(sentense)
console.log(result)*/


//Третье занятие с Димычем Функции
//var a = sum;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
