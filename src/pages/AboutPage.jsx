import React from "react";
import Navbar from '../components/Navbar';
import ChiliStory from "../components/ChiliStory";
import SpiceBanner from '../components/SpiceBanner';
import PolygonStory from '../components/PolygonStory';
import HellaGoodDining from "../components/HelloGoodsDining";
import Footer from "../components/Footer";
const Recipes = ()=>{
    return(
        <>
        <Navbar/>
        <ChiliStory/>
        <SpiceBanner/>
        <PolygonStory/>
        <HellaGoodDining/>
        <Footer/>
        </>
    );
};
export default Recipes;