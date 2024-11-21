import React, { useContext, useEffect, useState } from "react";
import './Navbar.css';
import logo from '../assets/poster-logo.png';
import cart_icon from '../assets/shopping-cart.png';
import { Link } from "react-router-dom";
import { ShopContext } from '../../context/ShopContext'; // Import the ShopContext

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Shop");
  const { getTotalItemsInCart } = useContext(ShopContext); // Get the function from context
  const [cartQuantity, setCartQuantity] = useState(0);

  // Update the cart quantity whenever it changes
  useEffect(() => {
    setCartQuantity(getTotalItemsInCart());
  }, [getTotalItemsInCart]);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo-img" src={logo} alt="Logo" />
        <p>PoStore</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setActiveItem("Shop")} className={activeItem === "Shop" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to="/">Shop</Link>
        </li>
        <li onClick={() => setActiveItem("movie")} className={activeItem === "movie" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to="/movie">Movie</Link>
        </li>
        <li onClick={() => setActiveItem("superhero")} className={activeItem === "superhero" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to="/superhero">Superheros</Link>
        </li>
        <li onClick={() => setActiveItem("artist")} className={activeItem === "artist" ? "active" : ""}>
          <Link style={{ textDecoration: 'none' }} to="/artist">Artist</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="nav-button">Login</button>
        </Link>
        <Link to="/cart">
          <img className="cart-img" src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{cartQuantity}</div>
      </div>
    </div>
  );
}