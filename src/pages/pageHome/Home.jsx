//React & Bibliotecas
import React from 'react';

//Components
import Nav from '../components/Nav/Nav.jsx'
import Footer from '../components/Footer/Footer.jsx'

//CSS
import './styles/Home.css';

//Home app
export default function Home() {
  return (
    <React.StrictMode>
      <HomeApp />
      <Footer />
    </React.StrictMode>
  );
}

//Home módulo
function HomeApp() {
  return (
    <div className="Home">
      <div className='NavBox'><Nav /></div>

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
)
}


