import React from "react";
import './Footer.css';
export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-menu">
                    <div className="footer-menu-text">Home</div>
                    <div className="footer-menu-text">About</div>
                    <div className="footer-menu-text">Blog</div>
                    <div className="footer-menu-text">Contact</div>
                </div>
                <div className="copyright">
                    © 2021 Yuyuyu Design.
                </div> 
            </div>
        );
    }
}