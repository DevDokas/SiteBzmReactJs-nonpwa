//React & Bibliotecas
import React from 'react';
import {Routes, Route} from 'react-router-dom'
//Rotas
import '../About/About.jsx'
//CSS
import './styles/Home.css';

export default function Home() {
  return (
    <div className="App">
      <div className="carrossel">

        <ul>
            <li>
                <img src="/images/1.jpg" alt="" />
            </li>
            <li>
                <img src="/images/2.jpg" alt="" />
            </li>
            <li>
                <img src="/images/3.jpg" alt="" />
            </li>
        </ul>

        <div className="divtext">
            <p className="text1">CORES QUE INSPIRAM</p>
            <p className="text2">Bazar Mexicano Textil LTDA.</p>
        </div>
      </div>
    </div>
  );
}


