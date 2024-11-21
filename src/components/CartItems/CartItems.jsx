import React, { useContext, useState } from "react";
import "./CartItems.css";
import all_product from "../assets/posters/poster_data";
import remove_icon from "../assets/removeicon.png";
import { ShopContext } from "../../context/ShopContext";

export default function CartItems() {
    const { cartItems, removeFromCart } = useContext(ShopContext);
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);

    // Calculate total
    const calculateProductTotal = () => {
        return all_product.reduce((total, product) => {
            const quantity = cartItems[product.id]?.quantity || 0;
            return total + (quantity * product.new_price);
        }, 0);
    };

    const shippingCost = 49;
    const productTotal = calculateProductTotal();
    const discountedTotal = productTotal - (productTotal * (discount / 100));
    const grandTotal = discountedTotal + shippingCost;

    // Handle coupon application
    const applyCoupon = () => {
        if (couponCode === "DISCOUNT10") {
            setDiscount(10);
        } else if (couponCode === "SAVE20") {
            setDiscount(20);
        }else if (couponCode === "POSTER30") {
            setDiscount(30);
        }
         else {
            setDiscount(0);
            alert("Invalid coupon code");
        }
    };

    return (
        <div className="cart-items">
            <div className="cart-items-container">
                <div className="cart-items-header">
                    <div>Product</div>
                    <div>Title</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
                    <div></div>
                </div>
                {all_product.map((product) => {
                    const cartItem = cartItems[product.id];
                    if (cartItem?.quantity > 0) {
                        return (
                            <div className="cart-item" key={product.id}>
                                <div className="cart-item-product">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="cart-item-title">
                                    <h3>{product.name}</h3>
                                    <span className="size">Size: {cartItem.size}</span>
                                </div>
                                <div className="cart-item-price">
                                    Rs {product.new_price}
                                </div>
                                <div className="cart-item-quantity">
                                    {cartItem.quantity}
                                </div>
                                <div className="cart-item-total">
                                    Rs {product.new_price * cartItem.quantity}
                                </div>
                                <div className="cart-item-remove">
                                    <img 
                                        src={remove_icon} 
                                        alt="Remove" 
                                        className="remove-icon"
                                        onClick={() => removeFromCart(product.id)}
                                    />
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            
            {productTotal > 0 ? (
                <div className="cart-summary">
                    <div className="cart-summary-row">
                        <span>Product Total:</span>
                        {discount > 0 ? (
                            <span>
                                <del>Rs {productTotal.toFixed(2)}</del> Rs {discountedTotal.toFixed(2)}
                            </span>
                        ) : (
                            <span>Rs {productTotal.toFixed(2)}</span>
                        )}
                    </div>
                    <div className="cart-summary-row">
                        <span>Shipping Cost:</span>
                        <span>Rs {shippingCost}</span>
                    </div>
                    <div className="cart-summary-row">
                        <span>Discount:</span>
                        <span>{discount}%</span>
                    </div>
                    <hr />
                    <div className="cart-summary-total">
                        <span>Grand Total:</span>
                        {discount > 0 ? (
                            <span>
                                <del>Rs {(productTotal + shippingCost).toFixed(2)}</del> Rs {grandTotal.toFixed(2)}
                            </span>
                        ) : (
                            <span>Rs {grandTotal.toFixed(2)}</span>
                        )}
                    </div>

                    {/* Coupon Code Section */}
                    <div className="coupon-section">
                        <input 
                            type="text" 
                            placeholder="Enter coupon code" 
                            value={couponCode} 
                            onChange={(e) => setCouponCode(e.target.value)} 
                        />
                        <button onClick={applyCoupon}>Apply Coupon</button>
                    </div>

                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            ) : (
                <div className="cart-empty">
                    Your cart is empty
                </div>
            )}
        </div>
    );
}