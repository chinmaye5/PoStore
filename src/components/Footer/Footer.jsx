import React from "react";
import './Footer.css'
import footer_logo from '../assets/poster-logo.png'
import instagram from '../assets/instagram.png'
import pintrest from '../assets/whatsapp.png'
import whatapp from '../assets/pinterest.png'

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="logo"></img>
                <p>PoStore</p>
            </div>
            <ul className="footer-links"> 
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram} alt="instagram"></img>
                </div>
                <div className="footer-icons-container">
                    <img src={whatapp} alt="whatsapp"></img>
                </div>
                <div className="footer-icons-container">
                    <img src={pintrest} alt="pintrest"></img>
                </div>
            </div>
            <div className="footer-copyright">
         
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </div>
    )
}