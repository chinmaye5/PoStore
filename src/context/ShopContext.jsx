import React, { createContext, useState } from "react";
import all_products from "../components/assets/posters/poster_data";

export const ShopContext = createContext(null);

// Initialize cart with quantities and sizes set to 0 and null respectively
const getDefaultCart = () => {
    const cart = {};
    all_products.forEach((product) => {
        cart[product.id] = { quantity: 0, size: null }; // Initialize with size and quantity
    });
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Function to add items to the cart
    const addToCart = (itemId, selectedSize) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: {
                quantity: prev[itemId].quantity + 1,
                size: selectedSize || prev[itemId].size // Update size only if provided
            }
        }));
    };

    // Function to remove items from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: {
                ...prev[itemId],
                quantity: Math.max(prev[itemId].quantity - 1, 0) // Decrease quantity, but not below 0
            }
        }));
    };

    // Function to get the total quantity of items in the cart
    const getTotalItemsInCart = () => {
        return Object.values(cartItems).reduce((total, item) => total + item.quantity, 0); // Sum up quantities
    };

    const contextValue = {
        all_products,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalItemsInCart // Expose the function to get total items
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;