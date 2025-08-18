import React, { useState } from 'react';

import categoriesData from '../data/catergoriesdata';
import { Link } from 'react-router-dom';



const LandingPageCategory = () => {

    return (

        <div>
            <div className="header-section text-center mt-5">
                <h1 className="display-4 fw-bold text-success mt-5">
                    <i className="fas fa-book-open me-3 text-success"></i> JENTRA E-Library Categories
                </h1>

            </div>
            <div className="hero-banner1">
                <div className="floating-elements">
                    <i className="fas fa-book floating-book"></i>
                    <i className="fas fa-graduation-cap floating-book"></i>
                    <i className="fas fa-laptop-code floating-book"></i>
                    <i className="fas fa-lightbulb floating-book"></i>
                </div>
                <div className="particles" id="particles"></div>
                <div className="container-fluid">
                    <div className="row align-items-center min-vh-100 m-3">
                        {categoriesData.map((file, index) => (
                            <div
                                className="col-lg-2 col-md-4 col-sm-6 mb-4"
                                key={file.id || index}
                            >
                                <div className="hero-image animate-fade-in">
                                    <div className="book-mockup">
                                        <div className="book-cover">
                                            <i className="fas fa-code book-icon"></i>
                                            <div className="book-title">
                                                {file.title}<br /> Ebook Collection
                                            </div>
                                            <div className="book-title">
                                                <br />
                                                <Link to={file.route}>Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>


    );
};

export default LandingPageCategory;
