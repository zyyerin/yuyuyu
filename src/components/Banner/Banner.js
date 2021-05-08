import React from "react";
import './Banner.css';

export default class Banner extends React.Component {
    render() {
        return (
            <div>
                <div className="hero-content">
                    <div className="banner-container">
                        <div className="centered-item title-container">
                            <div className="title-text">
                                Visual design studio 
                            </div>
                            <div className="title-text">
                                based in Shanghai 
                            </div>
                        </div>
                        <div className="centered-item subtitle-container">
                            <div className="subtitle-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
                            </div>
                            <div className="subtitle-text">
                                odio in et, lectus sit lorem id integer.
                            </div>
                        </div>
                        <div className="centered-item subtitle-discover-container">
                            <div className="discover-text">
                                About us
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-container">
                    <div className="lower-container-text">
                        <div className="centered-item project-text">
                            Recent Projects
                        </div>
                        <div className="centered-item feature-text">
                            Featured work by stuido Yuyuyu.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}