import React from 'react';
import { TiArrowForward } from 'react-icons/ti';
const SemrushFeatures = () => {
    return (
        <div className='Semrush_Features'>
            <div className='mx-3'>
                <h4>Semrush Features</h4>
                <h6 className='mt-4'>Highest-Rated Features</h6>
                <p><TiArrowForward className='ficon'/> <span>Technical SEO - SEO Software</span></p>
                <p><TiArrowForward className='ficon'/> <span>SEO Auditing - SEO Software</span></p>
                <p><TiArrowForward className='ficon'/> <span>SEO Change Tracking - SEO Software</span></p>
            </div>
            <div className='mx-3 my-4'>
                <h6>Lowest-Rated Features</h6>
                <p><TiArrowForward className='ficon'/> <span>Link Building - SEO Software</span></p>
                <p><TiArrowForward className='ficon'/> <span>White Label - SEO Reporting</span></p>
                <p><TiArrowForward className='ficon'/> <span>Localization - SEO Software</span></p>
            </div>
            <div className='my-2 text-center'>
                <button type="button" class="btn btn-success">Access Grid® Report</button>
                <p className='mx-2'>Data from Grid® Report for SEO | Fall 2022</p>

            </div>
        </div>
    );
};

export default SemrushFeatures;