import React from 'react';
import Banner from '../Banner/Banner';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Home.css'

const Home = () => {
    return (
        <div className='mx-5 broder-all'>
            <Banner/>
            <ProductDetails/>   
        </div>
    );
};

export default Home;