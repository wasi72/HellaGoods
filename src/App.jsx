import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/LandingPage';
import Restaurant from './pages/Restaurant';
import Recipe from "./pages/Recipes";
import AboutUs from './pages/AboutPage';
import AllProducts from './pages/AllProducts';
function App() {
  return (
    <BrowserRouter basename="/HellaGoods">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="restaurent" element={<Restaurant/>} />
        <Route path="recipes" element={<Recipe/>} />
        <Route path="about" element={<AboutUs/>} />
        <Route path="allprod" element={<AllProducts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
