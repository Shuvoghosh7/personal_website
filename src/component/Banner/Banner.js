import React from 'react';
import { Button, Col, Container, Placeholder, Row } from 'react-bootstrap';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { GiSelfLove } from 'react-icons/gi';
import banner from '../../images/banner.png'
import banner2 from '../../images/semrush.png'

import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-part'>
            <div>
                <img className='banner' src={banner} alt="" />
                <p className='bg-dark'>p</p>
            </div>
            <div className='d-lg-flex justify-content-between'>
                <div>
                    <div className='d-flex justify-content-around gap-5'>
                        <div className='title-image'>
                            <img src={banner2} alt="" />
                        </div>
                        <div>
                            <h1>Semrush</h1>
                            <div className='d-lg-flex d-md-flex justify-content-center align-items-center gap-3'>
                                <div className='d-flex react-icon'>
                                    <h3><AiTwotoneStar /></h3>
                                    <h3><AiTwotoneStar /></h3>
                                    <h3><AiTwotoneStar /></h3>
                                    <h3><BsStarHalf /></h3>
                                </div>
                                <div className='mt-3'>
                                    <p className='reviews'><span >1,635 reviews</span> | <span>29 discussions</span></p>
                                </div>
                            </div>
                            <div>
                                <p><GiSelfLove /> <span>Favorite | <span>Claimed</span></span></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='d-lg-flex d-md-flex'>
                    <div className='me-3 warning-btn'>
                        <Button variant="outline-warning" className='me-3 w-100'>Contact Semrush</Button>
                    </div>
                    <div className='me-3 success-btn'>
                        <Button variant="success" className='me-3 w-100'>Try it for free</Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;