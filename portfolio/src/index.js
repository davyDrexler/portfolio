import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/index';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
