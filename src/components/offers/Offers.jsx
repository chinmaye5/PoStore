import React from "react";
import './Offers.css';
import exclusive_image from '../assets/exclusive-bg.png';

export default function Offers(){
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive Offers</h1>
                <h2>Just For You</h2>
                <p>Enjoy exclusive deals on our best-seller products.</p>
                <button>Shop Now</button>
            </div>
            <div className="offers-image">
                <img src={exclusive_image} alt="Exclusive Offer Background"/>
            </div>
        </div>
    );
}