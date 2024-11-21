import React from "react";
import './RelatedProducts.css';
import data_product from "../assets/posters/poster_data";
import Item from "../item/item";

export default function RelatedProducts({ category, currentProductId }) {
    // Filter products by category, exclude current product, and limit to 4
    const relatedItems = data_product
        .filter((item) => item.category === category && item.id !== currentProductId)
        .slice(0, 4);

    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {relatedItems.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
}