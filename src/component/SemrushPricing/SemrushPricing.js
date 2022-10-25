import React from 'react';
import TopIndustries from './TopIndustries';
import './SemrushPricing.css'
const SemrushPricing = () => {
    return (
        <div className='mx-4 my-4'>
            <div className='row'>
                <div className='Semrush_Pricing col-9'>
                    <h4 className='ms-4'>Semrush Pricing</h4>
                    <div className='d-lg-flex d-md-flex justify-content-between gap-3 mx-4'>
                        <div className='card mb-3'>
                            <h3 className='card-title'>Free</h3>
                            <h3 className='price'><span>$</span>0</h3>
                        </div>
                        <div className='card mb-3'>
                            <h3 className='card-title'>Pro</h3>
                            <h3 className='price'><span>$</span>119.95 <span className='month'>/Month</span> </h3>
                        </div>
                        <div className='card mb-3'>
                            <h3 className='card-title'>Guru</h3>
                            <h3 className='price'><span>$</span>229.95 <span className='month'>/Month</span></h3>

                        </div>
                        <div className='card mb-3'>
                            <h3 className='card-title'>Business</h3>
                            <h3 className='price'><span>$</span>449.95 <span className='month'>/Month</span></h3>
                        </div>
                    </div>
                    <p>See all 5 <a href="https://www.g2.com/products/semrush/pricing" target="blank">Semrush pricing levels</a></p>
                </div>
                <div className='col-3'>
                    <TopIndustries />
                </div>
            </div>
        </div>
    );
};

export default SemrushPricing;