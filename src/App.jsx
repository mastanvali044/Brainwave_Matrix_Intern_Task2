import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import Login from "./components/Login.jsx";
import Introduction from "./components/IntroductionPage.jsx";
import Signup from "./components/Signup.jsx";

const App = () => {
  const [cart, setCart] = useState([]);
  const location = useLocation(); // Get the current route

  return (
    <>
      {/* Display Header only on the Product List page */}
      {location.pathname === "/home" && <Header cartCount={cart.length} />}

      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/home" element={<ProductList />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {location.pathname === "/home" && <Footer />}


    </>
  );
};

export default App;
