/*import React from "react";

const Main = () => {
  return (
    <div>
      <b>
        <h1 style={{ color: "purple" }}>
          <center>"FAV SHOP"</center>
        </h1>
      </b>
      <br></br>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become masterpieces</center>
      </h3>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
      <h3 style={{ color: "midnightblue" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h3>
    </div>
  );
};

export default Main;
*/
/*
import "./Main.css";
import React from "react";
import { Link } from "react-router-dom";
const Main = () => {
  const mainStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1464699855782-09d5f61999ac?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "White",
    textAlign: "center",
  };
  return (
    <div style={mainStyle}>
      <Link to="/default">product</Link>
      <div className="searchbar">
        <input
          typ="text"
          placeholder="Search for Products"
          className="Search"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <h1 style={{ color: "white" }}>FAV SHOP</h1>
      <p2 style={{ color: "gold" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </p2>
      <br></br>
      <h5>
        "Welcome to FavShop, where celebrations come alive <br />
        through personalized treasures.
        <br />
        Our curated collection offers bespoke gifts <br />
        for every occasion.
        <br /> With a commitment to quality, <br />
        our items are crafted to perfection.
        <br />
        What sets us apart is the power of personalization <br />
        add a unique touch to create unforgettable moments.
        <br />
        We pride ourselves on prompt delivery, <br />
        ensuring your gift arrives right on time.
        <br />
        Start gifting uniquely today at FavShop, <br />
        where thoughtful moments are made extraordinary!"
      </h5>
    </div>
  );
};

export default Main;
*/
/*
import "./Main.css";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const mainStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/high-angle-shot-red-rose-ground-night_181624-15585.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "White",
    textAlign: "center",
  };

  const products = [
    {
      id: 1,
      name: "Product 1",
      image:
        "https://img.freepik.com/free-photo/display-shiny-luxurious-golden-chain_23-2149635267.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=sph",
      price: "$10.00",
    },
    {
      id: 2,
      name: "Product 2",
      image:
        "https://img.freepik.com/free-photo/purple-candy-bar-curtain_140725-9962.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais",
      price: "$15.00",
    },
    {
      id: 3,
      name: "Product 3",
      image:
        "https://img.freepik.com/free-photo/beautiful-roses-with-cute-teddy-bear_23-2150737317.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais",
      price: "$15.00",
    },
    {
      id: 4,
      name: "Product 4",
      image:
        "https://img.freepik.com/free-photo/wedding-rings-wedding-celebrations-accessories-decorations_78826-2286.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=sph",
      price: "$16.00",
    },
    {
      id: 5,
      name: "Product 5",
      image:
        "https://img.freepik.com/free-photo/portrait-young-beautiful-smiling-female-trendy-summer-pink-dress-sexy-carefree-woman-posing-isolated-white-studio-positive-model-having-fun-indoors-cheerful-happy_158538-21306.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=sph",
      price: "$25.00",
    },
    // Add more products as needed
  ];

  const handleAddToCart = (productName) => {
    // Implement your logic for adding items to the cart
    console.log(`${productName} added to cart!`);
  };

  const handleViewItems = () => {
    // Implement your logic for viewing items in the cart
    console.log("Viewing items in the cart!");
  };

  return (
    <div style={mainStyle}>
      
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search for Products"
          className="Search"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <h1 style={{ color: "white" }}>FAV SHOP</h1>
      <h2 style={{ color: "gold" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h2>
      <br />
      <div>
        {products.map((product) => (
          <div key={product.id} className="product-container">
            <img
              src={product.image}
              alt={`Product ${product.id}`}
              className="product-image"
            />
            <div>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
            <button
              onClick={() => handleAddToCart(product.name)}
              className="cart-button"
            >
              Add to Cart
            </button>\
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleViewItems} className="view-items-button">
          View Items
        </button>
      </div>
    </div>
  );
};

export default Main;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
// import "./Main.css";
// import Cart from "./Cart";
const Main = () => {
  const mainStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/detailed-red-grunge-background-with-scratches-stains_1048-6467.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "White",
    textAlign: "center",
  };

  const products = [
    {
      id: 1,
      name: "CHAINS",
      image:
        "https://img.freepik.com/free-photo/display-shiny-luxurious-golden-chain_23-2149635267.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=sph",
      price: "$10.00",
    },
    {
      id: 2,
      name: "HOME DECORS",
      image:
        "https://img.freepik.com/free-photo/purple-candy-bar-curtain_140725-9962.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais",
      price: "$15.00",
    },
    {
      id: 3,
      name: "TOYS",
      image:
        "https://img.freepik.com/free-photo/beautiful-roses-with-cute-teddy-bear_23-2150737317.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais",
      price: "$15.00",
    },
    {
      id: 4,
      name: "RINGS",
      image:
        "https://img.freepik.com/free-photo/wedding-rings-wedding-celebrations-accessories-decorations_78826-2286.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=sph",
      price: "$16.00",
    },
    {
      id: 5,
      name: "DRESS",
      image:
        "https://img.freepik.com/free-photo/portrait-young-beautiful-smiling-female-trendy-summer-pink-dress-sexy-carefree-woman-posing-isolated-white-studio-positive-model-having-fun-indoors-cheerful-happy_158538-21306.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=sph",
      price: "$25.00",
    },
    // Add more products as needed
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productName) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.name === productName);

    if (existingItem) {
      // If the item is already in the cart, update the quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems((prevItems) => [
        ...prevItems,
        { name: productName, quantity: 1 },
      ]);
    }
  };
  const handleRemoveFromCart = (productName) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== productName)
    );
  };

  const handleViewItems = () => {
    // Implement your logic for viewing items in the cart
    console.log("Viewing items in the cart:", cartItems);
  };

  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div style={mainStyle}>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search for Products"
          className="Search"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <h1 style={{ color: "white" }}>FAV SHOP</h1>
      <h2 style={{ color: "gold" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h2>
      <br />
      <div>
        {products.map((product) => (
          <div key={product.id} className="product-container">
            <img
              src={product.image}
              alt={`Product ${product.id}`}
              className="product-image"
            />
            <div>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
            <button
              onClick={() => handleAddToCart(product.name)}
              className="cart-button"
            >
              <Typography sx={{ marginTop: "16px" }}>Add to Cart</Typography>
            </button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleViewItems} className="view-items-button">
          View Items ({totalItemsInCart})
        </button>
      </div>
    </div>
  );
};

export default Main;
*/
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import './Main.css'
import { Link } from "react-router-dom";
const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    // Filter products based on the input value
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const mainStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/detailed-red-grunge-background-with-scratches-stains_1048-6467.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "White",
    textAlign: "center",
  };

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setProducts(data.data);
      setLoading(false);
    });
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productName) => {
    const existingItem = cartItems.find((item) => item.name === productName);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { name: productName, quantity: 1 },
      ]);
    }
  };

  const handleRemoveFromCart = (productName) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== productName)
    );
  };

  const handleViewItems = () => {
    console.log("Viewing items in the cart:", cartItems);
  };

  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div style={mainStyle}>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search for Products"
          className="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <h1 style={{ color: "white" }}>FAV SHOP</h1>
      <h2 style={{ color: "gold" }}>
        <center>From Heart to Hand: Where Gifts Become Masterpieces</center>
      </h2>
      <br />
      <div className="products-grid">
        {!loading
          ? (searchTerm ? filteredProducts : products) && (searchTerm ? filteredProducts : products).map((product) => (
              <div key={product.id} className="product-container">
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="product-image"
                />
                <div>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </div>
                <button
                  onClick={() => handleAddToCart(product.title)}
                  className="cart-button"
                >
                  <Typography sx={{ marginTop: "16px" }}>Add to Cart</Typography>
                </button>
                <br></br>
                <Link to={`/product?id=${product.id}`}>
                  <button
                    style={{marginTop : 25}}
                    className="cart-button"
                  >
                    View item
                  </button>
                </Link>
              </div>
            ))
          : <div>Loading...</div>}
      </div>
      <div>
        <button
          onClick={handleViewItems}
          style={{ marginTop: 30 }}
          className="view-items-button"
        >
          View Items ({totalItemsInCart})
        </button>
      </div>
    </div>
  );
};

export default Main;
