import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'; // импортируем стили, отключающие базовые стили браузера
import './styles/index.css'; // импортируем глобальные стили нашего приложения
import './styles/fonts.css'; // импортируем глобальные стили шрифтов нашего приложения
import App from './App'; // подключаем наше приложение

const root = ReactDOM.createRoot(document.getElementById('root')); // создаем дерево реакта

// Отрисовываем наше приложение в браузер
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
