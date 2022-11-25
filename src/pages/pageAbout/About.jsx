/* eslint-disable no-unused-vars */
//React & Bibliotecas
import React, { useState } from "react";
import {Box} from '@mui/material'
import {TabContext} from '@mui/lab'
//Componentes
import Nav from "../components/Nav/Nav";
//Styles
import AntTab from './styles/AntTab.jsx'
import AntTabs from './styles/AntTabs.jsx'
import TabPages from "./styles/TabPages";
import './styles/style.css'
import BoxContent from "./styles/BoxContent";



export default function About() {
    return (
        <React.StrictMode>
            <AboutApp />
        </React.StrictMode>
    )
}

function AboutApp() {
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }      
    return (
        <>
        <Nav />
        <TabContext value={value}>
            <BoxContent>
                <AntTabs onChange={handleChange} aria-label="Barra de navegação de produtos" centered>
                    <AntTab sx={{}} label="Tecidos" value="1" />
                    <AntTab label="Rendas" value="2" />
                    <AntTab label="Aviamentos" value="3" />
                    <AntTab label="Tinturaria" value="4" />
                </AntTabs>
            </BoxContent>
            <Box>

                {/* Tab1 */}

                <TabPages value="1">
                    <div className="TabBox">
                        <div className="TabText">
                            <h1>Os melhores tecidos</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea culpa, corporis numquam neque, vitae aliquid nesciunt alias illo fugiat ab reiciendis quidem eos nostrum. Aliquid quod quo blanditiis reiciendis?</p>
                        </div>
                        <div>
                            <picture>
                                <img className="TabImages" src="/images/1.jpg" alt="" />
                            </picture>
                        </div>
                    </div>
                </TabPages>

                {/* Tab2 */}

                <TabPages value="2">
                    <div className="TabBox">
                        <div>
                            <picture>
                                <img className="TabImages" src="/images/2.jpg" alt="" />
                            </picture>
                        </div>
                        <div className="TabText">
                            <h1>Os melhores tecidos</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea culpa, corporis numquam neque, vitae aliquid nesciunt alias illo fugiat ab reiciendis quidem eos nostrum. Aliquid quod quo blanditiis reiciendis?</p>
                        </div>
                    </div>
                </TabPages>

                {/* Tab3 */}

                <TabPages value="3">
                    <div className="TabBox">
                        <div className="TabText">
                            <h1>Os melhores tecidos</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea culpa, corporis numquam neque, vitae aliquid nesciunt alias illo fugiat ab reiciendis quidem eos nostrum. Aliquid quod quo blanditiis reiciendis?</p>
                        </div>
                        <div>
                            <picture>
                                <img className="TabImages" src="/images/3.jpg" alt="" />
                            </picture>
                        </div>
                    </div>
                </TabPages>

                {/* Tab4 */}

                <TabPages value="4">
                <div className="TabBox">
                        <div>
                            <picture>
                                <img className="TabImages" src="/images/1.jpg" alt="" />
                            </picture>
                        </div>
                        <div className="TabText">
                            <h1>Os melhores tecidos</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea culpa, corporis numquam neque, vitae aliquid nesciunt alias illo fugiat ab reiciendis quidem eos nostrum. Aliquid quod quo blanditiis reiciendis?</p>
                        </div>
                    </div>
                </TabPages>
            </Box>
        </TabContext>
        </>
    )
}