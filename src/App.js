import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Footer from './components/Footer/Footer';
import movie_banner from './components/assets/moviebg.jpg';
import superhero_banner from './components/assets/superherobg.jpg';
import artist_banner from './components/assets/artistbg1.jpg';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/movie" element={<ShopCategory banner={movie_banner} category="movie" />} />
        <Route path="/superhero" element={<ShopCategory banner={superhero_banner} category="superhero" />} />
        <Route path="/artist" element={<ShopCategory banner={artist_banner} category="artist" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;