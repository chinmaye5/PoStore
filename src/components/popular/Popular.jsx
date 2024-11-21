import React from "react";
import './popular.css';
import Item from "../item/item";
import data_product from '../assets/posters/poster_data';

export default function Popular() {
    return (
        <div className="popular">
            <h1>Popular Products</h1>
            <hr />
            <div className="popular-items">
                {data_product
                    .filter(item => item.category === "popular") // Filter by category "popular"
                    .map((item) => (
                        <Item 
                            key={item.id}
                            id={item.id} 
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))
                }
            </div>
        </div>
    );
}