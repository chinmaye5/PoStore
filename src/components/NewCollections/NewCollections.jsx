import React from "react";
import './NewCollections.css';
import new_collection from '../assets/posters/poster_data';
import Item from "../item/item";

export default function NewCollections(){
    return(
        <div className="new-collections">
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                {new_collection
                    .filter(item => item.category === "new") // Filter by category "new"
                    .slice(0, 4) // Limit to the first 4 items
                    .map(item => (
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