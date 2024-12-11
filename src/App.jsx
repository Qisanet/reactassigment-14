import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Features from "./Features";
import Support from "./Support";
import Enterprise from "./Enterprise";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/support" element={<Support />} />
        <Route path="/enterprise" element={<Enterprise />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
