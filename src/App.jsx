//React & Bibliotecas
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Rotas
import Home from './pages/pageHome/Home.jsx'
import About from './pages/pageAbout/About.jsx';

//App
export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                {/* Home */}
                <Route path='/' element={<Home />} />
                {/* About */}
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}