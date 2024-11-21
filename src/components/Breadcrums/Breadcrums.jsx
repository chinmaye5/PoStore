import React from "react";
import './Breadcrums.css';

export default function Breadcrums({ product }) {
    
    return (
        <div className="breadcrum">
            HOME / 
            SHOP /
            {product.category} /
            {product.name}
        </div>
    );
}