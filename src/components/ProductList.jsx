import React from "react";
const products = [
  // Electronics
  { id: 1, name: "iPhone 15 Pro", price: 999, image: "/images/iphone15.png", category: "Electronics" },
  { id: 2, name: "Samsung Galaxy S23", price: 899, image: "/images/samsung-s23.png", category: "Electronics" },
  { id: 3, name: "Sony Wireless Headphones", price: 150, image: "/images/headset.png", category: "Electronics" },
  { id: 4, name: "Apple MacBook Pro", price: 1999, image: "/images/laptop.png", category: "Electronics" },
  { id: 5, name: "Canon DSLR Camera", price: 850, image: "/images/download.jpg", category: "Electronics" },

  // Fashion
  { id: 6, name: "Nike Running Shoes", price: 120, image: "/images/sneaker.png", category: "Fashion" },
  { id: 7, name: "Adidas Sports Jacket", price: 90, image: "/images/download1.jpg", category: "Fashion" },
  { id: 8, name: "Ray-Ban Sunglasses", price: 150, image: "/images/download2.jpg", category: "Fashion" },
  { id: 9, name: "Fossil Leather Watch", price: 200, image: "/images/download3.jpg", category: "Fashion" },
  { id: 10, name: "Levi's Denim Jeans", price: 70, image: "/images/download4.jpg", category: "Fashion" },

  // Home Appliances
  { id: 11, name: "Samsung 55-inch 4K TV", price: 1200, image: "/images/download5.jpg", category: "Home Appliances" },
  { id: 12, name: "Dyson Vacuum Cleaner", price: 500, image: "/images/download6.jpg", category: "Home Appliances" },
  { id: 13, name: "Instant Pot Cooker", price: 100, image: "/images/download7.jpg", category: "Home Appliances" },
  { id: 14, name: "LG Refrigerator", price: 1400, image: "/images/download8.jpg", category: "Home Appliances" },
  { id: 15, name: "Philips Air Fryer", price: 130, image: "/images/download9.jpg", category: "Home Appliances" },
];

const ProductList = ({ cart, setCart }) => {
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
