import React, { useContext, useState } from "react";
import './ProductDisplay.css';
import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from 'react-router-dom';

export default function ProductDisplay(props) {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    const [rating, setRating] = useState(null);
    const [selectedSize, setSelectedSize] = useState("");

    const handleRatingClick = (index) => {
        setRating(index + 1);
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const displayRating = rating !== null ? rating : product.stars;
    const navigate = useNavigate();

    return (
        <div className="product-display">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
                <h1 className="product-name">{product.name}</h1>
                <div className="price-info">
                    <span className="new-price">Rs {product.new_price}</span>
                    <span className="old-price">Rs {product.old_price}</span>
                </div>
                <div className="rating">
                    <span>Rating: </span>
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`star ${index < displayRating ? 'filled' : 'empty'}`}
                            onClick={() => handleRatingClick(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            {index < displayRating ? "★" : "☆"}
                        </span>
                    ))}
                    <span className="rating-count">({product.reviews} Reviews)</span>
                </div>
                <div className="size-selection">
                    <span>Size:</span>
                    <div className="size-options">
                        {["A4", "A3", "A2"].map((size) => (
                            <div
                                key={size}
                                className={`size-box ${selectedSize === size ? "selected" : ""}`}
                                onClick={() => handleSizeClick(size)}>{size}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="category">
                    <span>Category: {product.category}</span>
                </div>
                <p className="description">{product.description}</p>
                <div className="button-group">
                <button className="add-to-cart" onClick={() => {
                if (selectedSize) {
                    addToCart(product.id, selectedSize); // Pass selected size
                    alert("Added to cart!");
                } else {
                    alert("Please select a size first!");
                }
            }}>
                Add to Cart
            </button>
            <button className="buy-now" onClick={() => {
                if (selectedSize) {
                    addToCart(product.id, selectedSize); // Pass selected size
                    navigate('/cart'); // Navigate to the cart page
                } else {
                    alert("Please select a size first!");
                }
            }}>
                Buy Now
            </button>
                </div>
            </div>
        </div>
    );
}