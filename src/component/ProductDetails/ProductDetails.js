import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SemrushFeatures from '../SemrushFeatures/SemrushFeatures';
import './ProductDetails.css'
import SemrushDetails from './SemrushDetails';

const ProductDetails = () => {
    const[text,setText]=useState('')


    const showTaxt=()=>{
        setText( 
         <div>
            <p>-Over 800 million unique domains monitored for 142 geo databases</p>
            <p>-Over 43 trillion backlinks </p>
            <p>-21 billion keywords</p>
            <p>-Over 10 million users who have tried Semrush</p>
        </div>)
    
    }

    return (
        <div className='mb-5'>
            <h1 className='mx-2 my-3'>Semrush Reviews & Product Details</h1>
            <div class="row mx-4">
                <div class="col-lg-8 product-details">
                    <h3 className='Overview py-3'>Semrush Overview</h3>
                    <div className='ms-3'>
                        <h4>What is Semrush?</h4>
                        <p>Semrush is a leading online visibility management software-as-a-service platform.
                            With over 55 products, tools and add-ons across online visibility management, including tools for search, content, social media and market research, data for more than 142 countries, seamless integration with Google and task management platforms, Semrush is a critical solution for all companies who are serious about online presence.</p>
                        <p>Semrush in numbers:</p>
                        <p>{text}</p>
                        {text?<button className='btn btn-link' onClick={()=>{setText('')}}>See Less</button>:<button className='btn btn-link' onClick={showTaxt}>See More</button>}
                    </div>
                    <div className='Semrush_Details'>
                        <SemrushDetails/>  
                    </div>
                </div>
                <div class="col-lg-4">
                    <SemrushFeatures />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;