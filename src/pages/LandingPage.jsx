import React from "react";
import Navbar from '../components/Navbar';
import HellaGoods from "../components/HellaGoods";
import HeroSection from '../components/ShopNow';
import ProductShowcase from "../components/ProductShowcase";
import Testtimonial from '../components/Testimonial';
import ComparisonTable from "../components/ComparisonTable";
import ProductOfTheMonth from '../components/ProductOfTheMonth';
import HellaGoodDining from "../components/HelloGoodsDining";
import RecipePage from "../components/RecipePage";
import SecretSauce from "../components/SecretSauce";
import MerchGrid from "../components/MerchGrid";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const HomePage = ()=>{
    return(
        <>
        <Navbar/>
        <HellaGoods/>
        <HeroSection/>
        <ProductShowcase/>
        <Testtimonial/>
        <ComparisonTable/>
        <ProductOfTheMonth/>
        <HellaGoodDining/>
        <RecipePage/>
        <SecretSauce/>
        <MerchGrid/>
        <Newsletter/>
        <Footer/>
        </>
    );
};
export default HomePage;