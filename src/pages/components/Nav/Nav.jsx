import React from "react";
import "./styles/Nav.css"

export default function Nav() {
    return (
        <div className="base">
            <nav className="menu">
                <a href="/" className="logo">
                    <img className="bzmlogo" src="/images/bzmlogo.png" alt="" />
                </a>

                <ul>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/about">Sobre</a></li>
                    <li><a href="/store">Loja</a></li>
                    <li><a href="/sac">SAC</a></li>
                </ul>

                <div className="Buscador">
                    <input type="search" className="inpt inputbusca" name="inpt inputbusca" id="inpt inputbusca" placeholder="Estou procurando por..." />
                    <img className="searchico" src="/images/search.png" alt=""/>
                </div>
            </nav>
        </div>
    )
}

