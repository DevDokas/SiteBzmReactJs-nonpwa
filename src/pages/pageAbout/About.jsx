/* eslint-disable no-unused-vars */
//React & Bibliotecas
import React from "react";
//Componentes
import Nav from "../components/Nav/Nav";
//CSS
import './styles/About.css'

export default function About() {
    return (
        <React.StrictMode>
            <Nav />
            <AboutApp />
        </React.StrictMode>
    )
}

function AboutApp () {
    return(
        <>
            <section className="navSession">
                <ul className="navSessionGroup">
                    <li className="navitem">
                        <a className="sessionbarButton" href="#scrollspyTecidos">Tecidos</a>
                    </li>
                    <li className="navitem">
                        <a className="sessionbarButton" href="#scrollspyRendas">Rendas</a>
                    </li>
                    <li className="navitem">
                        <a className="sessionbarButton" href="#scrollspyAviamentos">Aviamento</a>
                    </li>
                    <li className="navitem">
                        <a className="sessionbarButton" href="#scrollspyTinturaria">Tinturaria</a>
                    </li>
                </ul>
            </section>

            <div data-bs-spy="scroll" data-bs-target="#navbar-saibamais" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
                <div>
                    <div id="scrollspyTecidos" />
                    <img src="/images/1.jpg" alt="" />
                </div>
                <div>
                    <div id="scrollspyRendas" />
                    <img src="/images/2.jpg" alt="" />
                </div>
                <div>
                    <div id="scrollspyAviamentos" />
                    <img src="/images/3.jpg" alt="" />
                </div>
                <div>
                    <div id="scrollspyTinturaria" />
                    <img src="/images/1.jpg" alt="" />
                </div>
            </div>
        </>

        
    )
}