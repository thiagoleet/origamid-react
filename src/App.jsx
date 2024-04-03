import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

import "./App.css";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produto/:id/*" element={<Product />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
