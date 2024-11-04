import React from "react";
import Navbar from '../components/Navbar';
import Recipe from '../components/Recipes';
import Footer from "../components/Footer";
const Recipes = ()=>{
    return(
        <>
        <Navbar/>
        <Recipe/>
        <Footer/>
        </>
    );
};
export default Recipes;