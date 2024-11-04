import React from "react";
import Navbar from '../components/Navbar';
import FoodBanner from '../components/FoodBanner';
import Menu from '../components/Menu';
import LocationCards from '../components/LocationCards';
import Footer from "../components/Footer";
const Restaurant = ()=>{
    return(
        <>
        <Navbar/>
        <FoodBanner/>
        <Menu/>
        <LocationCards/>
        <Footer/>
        </>
    );
};
export default Restaurant;