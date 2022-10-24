import React, { useState } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { AiFillMessage } from 'react-icons/ai';
import { TfiWorld } from 'react-icons/tfi';
import { FaSellcast } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const SemrushDetails = () => {
    const [text, setText] = useState('')
    const showTaxt = () => {
        setText(
            <div>
                <h5>Product Description</h5>
                <p>Online Visibility and Content Marketing SaaS Platform</p>
                <h5>How do you position yourself against your competitors?</h5>
                <p>Our software helps marketers in companies of all sizes and industries to optimize their online visibility across key channels (from Search to Social Media and PR) and create engaging content for their users. Our reach data allows to discover great opportunities for growth, while workflow and tracking solutions help users to constantly run experiments and accurately measure results.</p>
                <div className='Seller_Details'>
                    <h5>Seller Details</h5>
                    <div className='d-flex justify-content-around'>
                        <div>
                            <div>
                                <FaSellcast /> <span>Seller</span>
                                <p>Semrush</p>
                            </div>
                            <div>
                                <CgWebsite /> <span>Company Website</span>
                                <p><a href="https://www.semrush.com/" target="blank">www.semrush.com</a></p>
                            </div>
                            <div>
                                <FaPhoneAlt /> <span>Phone</span>
                                <p>1-855-814-4510</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <ImLocation2 /> <span>HQ Location</span>
                                <p>Boston, MA</p>
                            </div>
                            <div>
                                <AiFillTwitterSquare /> <span>Twitter</span>
                                <p>@semrush220,702 Twitter followers</p>
                            </div>
                            <div>
                                <AiFillLinkedin /> <span>LinkedIn® Page</span>
                                <p><a href="https://www.linkedin.com/company/2821922/" target="blank">www.linkedin.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Description</h4>
                        <p>Our software helps marketers in companies of all sizes and industries to optimize their online visibility across key channels (from Search to Social Media and PR) and create engaging content for their users. Our reach data allows to discover great opportunities for growth, while workflow and tracking solutions help users to constantly run experiments and accurately measure results.</p>
                    </div>
                </div>
            </div>)
    }
    return (
        <div>
            <h1>Semrush Details</h1>
            <div className='mx-3 d-flex justify-content-between '>
                <div>
                    <div>
                        <CgWebsite /><span className='ms-2'>Website</span>
                        <p><a href="https://www.semrush.com/features/" target="blank">Semrush</a></p>
                    </div>
                    <div>
                        <AiFillMessage /> <span className='ms-2' >Discussions</span>
                        <p><a href="https://www.g2.com/products/semrush/discuss">Semrush Community</a></p>
                    </div>

                </div>
                <div>
                    <TfiWorld /> <span className='ms-2' >Languages Supported</span>
                    <p>German, English, French, Italian, Japanese, <br /> Portuguese, Spanish, Chinese (Simplified)</p>
                </div>
            </div>
            <div className='ms-2 mb-2'>
                <p>{text}</p>
                {text ? <button className='btn btn-link' onClick={() => { setText('') }}>See Less</button> : <button className='btn btn-link' onClick={showTaxt}>See More</button>}
            </div>
        </div>
    );
};

export default SemrushDetails;