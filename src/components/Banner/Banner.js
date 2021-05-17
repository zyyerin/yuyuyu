import React from "react";
import { Link } from "react-router-dom";
import './Banner.css';

export default class Banner extends React.Component {
    render() {
        return (
            <div>
                <div className="hero-content">
                    <div className="banner-container">
                        <div className="centered-item title-container">

                            {/* pc view-banner */}
                            <div className="title-text pc-view-banner">
                                Visual design studio 
                            </div>
                            <div className="title-text pc-view-banner">
                                based in Shanghai 
                            </div>

                            {/* mobile view-banner */}
                            <div className="title-text mobile-view-banner">
                                Visual design 
                            </div>
                            <div className="title-text mobile-view-banner">
                                studio based in 
                            </div>
                            <div className="title-text mobile-view-banner">
                               Shanghai 
                            </div>

                        </div>
                        <div className="centered-item subtitle-container">

                            {/* pc view-banner */}
                            <div className="subtitle-text pc-view-banner">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
                            </div>
                            <div className="subtitle-text pc-view-banner">
                                odio in et, lectus sit lorem id integer.
                            </div>

                            {/* mobile view-banner */}
                            <div className="subtitle-text mobile-view-banner">
                                Lorem ipsum dolor sit amet, 
                            </div>
                            <div className="subtitle-text mobile-view-banner">
                                consectetur adipiscing elit. Nunc odio
                            </div>
                            <div className="subtitle-text mobile-view-banner">
                                in et, lectus sit lorem id integer.
                            </div>
                        </div>
                        <div className="centered-item pc-view-banner">
                            <Link><button className="about-us-button">ABOUT US</button></Link>
                        </div>
                    </div>
                </div>
                <div className="lower-container mobile-view-banner">
                    <div className="lower-container-text">
                        <div className="centered-item project-text">
                            Featured Projects
                        </div>
                        <div className="centered-item feature-text">
                            Since 2018.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}