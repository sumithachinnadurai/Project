import React, { useState } from "react";

const Product = ({ id, name, price, image, addToCart }) => (
  <div>
    <h3>{name}</h3>
    <p>${price}</p>
    <img
      src={image}
      alt={name}
      style={{ maxWidth: "100px", maxHeight: "100px" }}
    />
    <button onClick={() => addToCart({ id, name, price, image })}>
      Add to Cart
    </button>
  </div>
);

const Cart = ({ cartItems }) => (
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      {cartItems.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div>
      <h1>React Shopping App</h1>
      <Product
        id={1}
        name="Product 1"
        price={20}
        image="https://buffer.com/library/content/images/2023/10/free-images.jpg"
        addToCart={addToCart}
      />
      <Product
        id={2}
        name="Product 2"
        price={30}
        image="https://buffer.com/library/content/images/2023/10/free-images.jpg"
        addToCart={addToCart}
      />
      <Cart cartItems={cart} />
    </div>
  );
};

export default App;
