import React from "react";
import './Header.css';
import logo from '../../images/yuyuyu.svg';
import menu_svg from '../../images/menu.svg';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="signature">
                    <img src={logo} />
                </div>
                <div className="menu">
                    <div className="menu-text">Projects</div>
                    <div className="menu-text menu-text-padding-left">Gallery</div>
                    <div className="menu-text menu-text-padding-left">About and Contact</div>
                </div> 
                <div className="menu-svg">
                    <img src={menu_svg} />
                </div>
            </div>
        );
    }
}