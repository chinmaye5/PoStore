import React from "react";
import './item.css';
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <div className="item-card">
            <Link to={`/product/${props.id}`}>
                <img onClick={window.scrollTo(0,0)} className="item-image" src={props.image} alt={props.name} />
            </Link>
            <h3 className="item-name">{props.name}</h3>
            <div className="item-prices">
                <span className="new-price">Rs {props.new_price}</span>
                <span className="old-price">Rs {props.old_price}</span>
            </div>
        </div>
    );
};

export default Item;