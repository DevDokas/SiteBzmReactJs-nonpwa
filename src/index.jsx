//React & Bibliotecas
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
//CSS
import './index.css';
//Componentes
import Home from './pages/Home/Home.jsx'
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav />
    <Home />
    <Footer />
  </BrowserRouter>
);