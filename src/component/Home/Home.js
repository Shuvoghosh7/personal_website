import React from 'react';
import Banner from '../Banner/Banner';
import OfficialDownloads from '../OfficialDownloads/OfficialDownloads';
import ProductDetails from '../ProductDetails/ProductDetails';
import SemrushPricing from '../SemrushPricing/SemrushPricing';
import './Home.css'

const Home = () => {
    return (
        <div className='mx-5 broder-all'>
            <Banner/>
            <ProductDetails/>
            <SemrushPricing/>
            <OfficialDownloads/>   
        </div>
    );
};

export default Home;