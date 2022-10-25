import React from 'react';
import Banner from '../Banner/Banner';
import ProductDetails from '../ProductDetails/ProductDetails';
import SemrushPricing from '../SemrushPricing/SemrushPricing';
import './Home.css'

const Home = () => {
    return (
        <div className='mx-5 broder-all'>
            <Banner/>
            <ProductDetails/>
            <SemrushPricing/>   
        </div>
    );
};

export default Home;