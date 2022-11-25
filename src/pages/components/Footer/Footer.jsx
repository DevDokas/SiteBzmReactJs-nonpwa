import React from "react";
import "./styles/Footer.css"

export default function Footer () {
    return(
        <footer>
        <ul>
            <li>
                <a href="https://www.instagram.com/bzmtextil/" target="_blank" rel="noreferrer">
                    <img className="footerico" src="/images/instagram.png" alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/bzmtextil/" target="_blank" rel="noreferrer">
                    <img className="footerico" src="/images/facebook.png" alt="" />
                </a>   
            </li>
            <li>
                <a href="https://sitejesssica.my.canva.site" target="_blank" rel="noreferrer">
                    <img className="footerico" src="/images/whatsapp.png" alt="" />
                </a>
            </li>
            <li>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=bzmtextiljuruaia@gmail.com" target="_blank" rel="noreferrer">
                    <img className="footerico" src="/images/mailbox.png" alt="" />
                </a>
            </li>
        </ul>
        <p className="address"> R. Francisco Cruvinel de Resende, 272 - Mirante, Juruaia - MG, 37805-000</p>
        <p className="tell">(35) 3553-1894</p>
    </footer>
    )
}