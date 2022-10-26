import React, { useState } from 'react';
import './OfficialDownloads.css'
import download1 from '../../images/download/download1.png'
import download2 from '../../images/download/download2.png'
import download3 from '../../images/download/download3.png'
import download4 from '../../images/download/download4.png'
import download5 from '../../images/download/download5.png'
const OfficialDownloads = () => {
    const [text, setText] = useState('')

    const showTaxt = () => {
        setText(
            <div className='row'>
                {/* download-4 */}
                <div className='project-container col-lg-4'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={download4} alt="" />
                        </div>
                        <div className="details">
                            <div className='content'>
                                <h1 className='mb-5'><a href="" target="_blank">Download</a></h1>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>The Ultimate Site Audit With SEMrush Ebook</h5>
                    </div>
                </div>
                {/* download-5 */}
                <div className='project-container col-lg-4'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={download5} alt="" />
                        </div>
                        <div className="details">
                            <div className='content'>
                                <h1 className='mb-5'><a href="" target="_blank">Download</a></h1>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>The Ultimate Guide for Content Marketers by SEMrush</h5>
                    </div>
                </div>
            </div>)

    }
    return (
        <div className='Downloads mx-4'>
            <h3 className='my-3'>Official Downloads</h3>
            <div className='row'>
                {/* download-1 */}
                <div className='project-container col-lg-4'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={download1} alt="" />
                        </div>
                        <div className="details">
                            <div className='content'>
                                <h1 className='mb-5'><a href="" target="_blank">Download</a></h1>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>Building a Data-Driven Digital Marketing Strategy from Scratch Ebook</h5>
                    </div>
                </div>
                {/* download-2 */}
                <div className='project-container col-lg-4'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={download2} alt="" />
                        </div>
                        <div className="details">
                            <div className='content'>
                                <h1 className='mb-5'><a href="" target="_blank">Download</a></h1>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>SEMrush Toolkit for PPC Ebook</h5>
                    </div>
                </div>
                {/* download-3 */}
                <div className='project-container col-lg-4'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src={download3} alt="" />
                        </div>
                        <div className="details">
                            <div className='content'>
                                <h1 className='mb-5'><a href="" target="_blank">Download</a></h1>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>Competitive Research & Market Analysis with SEMrush Ebook</h5>
                    </div>
                </div>
            </div>
            <div>
                <p>{text}</p>
                {text ? <button className='btn btn-link' onClick={() => { setText('') }}>See Less</button> : <button className='btn btn-link' onClick={showTaxt}>See More</button>}
            </div>
        </div>
    );
};

export default OfficialDownloads;