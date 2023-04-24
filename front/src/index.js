import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import 'normalize.css'; // импортируем стили, отключающие базовые стили браузера
import './styles/index.css'; // импортируем глобальные стили нашего приложения
import './styles/fonts.css'; // импортируем глобальные стили шрифтов нашего приложения
import App from './App'; // подключаем наше приложение

// опеределяем куда мы будем обращаться за данными с сервера
axios.defaults.baseURL = process.env.NODE_ENV === "development"
  ? 'http://localhost:3030'
  : `${window.location.protocol}//${window.location.host}`

const root = ReactDOM.createRoot(document.getElementById('root')); // создаем дерево реакта

// Отрисовываем наше приложение в браузер
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
