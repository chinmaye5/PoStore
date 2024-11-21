import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/popular/Popular";
import './Shop.css'; 
import Offers from "../components/offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/Newsletter/NewsLetter";

export default function Shop() {
    return (<>
        <div className="shop">
            <Hero />
        </div>
        <Popular></Popular>
        <Offers></Offers>
        <NewCollections></NewCollections>
        <NewsLetter></NewsLetter>
        </>
    );
}