import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import { DataContext } from "./utilities/context";
import axios from "axios";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Checkout from "./pages/Checkout";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const res = localStorage.getItem("cartItem");
    const parsedData = JSON.parse(res);
    console.log(parsedData);
    setCartItems(parsedData);
  }, []);

  useEffect(() => {
    const mintData = async () => {
      try {
        const { data } = await axios.get("/data.json");
        setFetchedData(data);
      } catch (error) {
        console.error(error);
      }
    };
    mintData();
  }, []);

  console.log(fetchedData);
  
  const Nomatch = () => {
    return <div>unknown route...........please be specific</div>;
  };

  return (
    <DataContext.Provider value={{ fetchedData, cartItems }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/:slug" element={<Product />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
      <Footer />
    </DataContext.Provider>
  );
}

export default App;
