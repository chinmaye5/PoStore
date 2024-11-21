import React from "react"
import './Hero.css';
import wave_icon from '../assets/hero_wave.png';
import hero_icon from '../assets/hero_icon.png';
import hero from '../assets/heroposter-Photoroom.png';
export default function Hero(){
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>NEW POSTERS EVERYDAY</h2>
                <div>
                    <div className="hand-wave-icon">
                    <p>Welcome</p>
                    <img className="wave_icon" src={wave_icon} alt="Wave"></img>
                    </div>
                    <p>Buy your favourite poster today</p>
                    <p>from all genres</p>
                </div>
                <div className="hero-latest-button">
                    <div>Latest Collection</div>
                    <img className="arrow_icon" src={hero_icon} alt="arrow"></img>
                </div>
            </div>
            <div className="hero-right">
                <img className="hero_poster" src={hero} alt="Hero"></img>
            </div>
        </div>
    )
}