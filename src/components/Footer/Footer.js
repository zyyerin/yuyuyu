import React from "react";
import './Footer.css';
export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                {/* <div className="footer-menu pc-view-footer">
                    <a href="https://www.instagram.com/zyyerin/" className="footer-menu-text">Instagram</a>
                    <a className="footer-menu-text">LinkedIn</a>
                    <a className="footer-menu-text">Email</a>
                </div> */}
                <div className="copyright">
                    © 2021 Yuyuyu Design.
                </div> 
            </div>
        );
    }
}