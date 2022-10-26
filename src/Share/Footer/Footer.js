import React from 'react';
import './Footer.css'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='mx-5 py-3 row'>
                <div className='footer-content col-lg-3'>
                    <h3 className='mb-3'>G2</h3>
                    <p>G2 Track</p>
                    <p>G2 Deals</p>
                    <p>Learning Hub</p>
                    <p>Software Reviews</p>
                    <p>Add Your Product/Service</p>
                    <p>Research Hub</p>
                    <p>Research Agenda</p>
                    <p>Compare Software</p>
                    <p>Technology Glossary</p>
                    <p>Best Software Companies</p>
                    <p>Seller Info</p>
                </div>
                <div className='footer-content col-lg-3'>
                    <h3 className='mb-3'>Top Categories</h3>
                    <p>CRM Software</p>
                    <p>Project Management Software</p>
                    <p>Expense Management Software</p>
                    <p>Video Conferencing Software</p>
                    <p>Online Backup Software</p>
                    <p>E-Commerce Platforms</p>
                    <p>Accounting Software</p>
                    <p>ERP Systems</p>
                    <p>Marketing Automation Software</p>
                    <p>All Categories</p>
                </div>
                <div className='footer-content col-lg-3'>
                    <h3 className='mb-3'> Company</h3>
                    <p>About</p>
                    <p>User Help Center</p>
                    <p>G2 Gives</p>
                    <p>Careers</p>
                    <p>Teams</p>
                    <p>News</p>
                    <p>Contact</p>
                    <p>G2</p>
                    <p>100 S Wacker Dr</p>
                    <p>STE 600</p>
                    <p>Chicago, IL 60606</p>

                </div>
                <div className='footer-content col-lg-3'>
                    <h3 className='mb-3'>Policies</h3>
                    <p>Community Guidelines</p>
                    <p>G2 Scoring Methodologies</p>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Do not sell my personal information</p>
                    <p>Legal</p>
                    <p>Content Usage Guidelines</p>
                </div>
            </div>

            <div className='footer-icon'>
                <AiFillTwitterSquare className='twiter' />
                <AiFillFacebook className='facebook' />
                <AiFillLinkedin className='linkedin' />
            </div>
            <div className='copy_Right'>
                <p><small>&copy; 2022 G2.com, Inc. All rights reserved</small></p>
            </div>

        </div>
    );
};

export default Footer;