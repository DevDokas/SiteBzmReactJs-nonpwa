import React from "react";
import "./styles/Nav.css"

export default function Nav() {
    return (
        <nav className="menu">
            <a href="https://taupe-pavlova-d25425.netlify.app" className="logo">
                <img className="bzmlogo" src="/images/bzmlogo.png" alt="" />
            </a>

            <ul>
                <li><a href="https://taupe-pavlova-d25425.netlify.app">Menu</a></li>
                <li><a href="/views/saibamais.html">Sobre</a></li>
                <li><a href="/views/loja.html">Loja</a></li>
                <li><a href="/views/sac.html">SAC</a></li>
            </ul>

            <div className="Buscador">
                <input type="search" className="inpt inputbusca" name="inpt inputbusca" id="inpt inputbusca" value="Estou procurando por..." />
                <img className="footerico searchico" src="/images/search.png" alt=""/>
            </div>
        
        </nav>
    )
}

