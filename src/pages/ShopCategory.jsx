import React, { useContext, useState } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown.png";
import Item from "../components/item/item";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("relevance");

  // Filter products by category first
  const categoryProducts = all_products.filter(
    (item) => props.category === item.category
  );

  // Sort products based on selected option
  const getSortedProducts = () => {
    switch (sortOption) {
      case "high-to-low":
        return [...categoryProducts].sort((a, b) => b.new_price - a.new_price);
      case "low-to-high":
        return [...categoryProducts].sort((a, b) => a.new_price - b.new_price);
      default: // relevance - original order
        return categoryProducts;
    }
  };

  const sortedProducts = getSortedProducts();

  return (
    <div className="shop-category">
      <img className="shop-banner" src={props.banner || ""} alt="banner" />
      <div className="shop-category-header">
        <p>
          <span>Showing 1-{sortedProducts.length}</span> Out of {all_products.length} Products
        </p>
        <div className="sort-container">
          <div 
            className="shopcategory-sort"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Sort by: {sortOption.charAt(0).toUpperCase() + sortOption.slice(1).replace(/-/g, ' ')} 
            <img 
              src={dropdown_icon} 
              alt="dropdown icon"
              className={isDropdownOpen ? 'rotated' : ''}
            />
          </div>
          {isDropdownOpen && (
            <div className="sort-dropdown">
              <div 
                className={`sort-option ${sortOption === 'relevance' ? 'selected' : ''}`}
                onClick={() => {
                  setSortOption('relevance');
                  setIsDropdownOpen(false);
                }}
              >
                Relevance
              </div>
              <div 
                className={`sort-option ${sortOption === 'high-to-low' ? 'selected' : ''}`}
                onClick={() => {
                  setSortOption('high-to-low');
                  setIsDropdownOpen(false);
                }}
              >
                Price: High to Low
              </div>
              <div 
                className={`sort-option ${sortOption === 'low-to-high' ? 'selected' : ''}`}
                onClick={() => {
                  setSortOption('low-to-high');
                  setIsDropdownOpen(false);
                }}
              >
                Price: Low to High
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.map((item) => (
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
};

export default ShopCategory;