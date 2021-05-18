import React from "react";
import './Header.css';
import logo from '../../images/yuyuyu.svg';
import menu_svg from '../../images/menu.svg';
import $ from 'jquery'

export default class Header extends React.Component {
    componentDidMount(){    
        $(function () {

            // show hide subnav depending on scroll direction
            var position = $(window).scrollTop();
        
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
        
                if (scroll > position) {
        
                    //only piece that matters
                    $('nav')
                        .stop(true, false)
                        .removeClass('animateIn')
                        .addClass('animateOut');
                    // scrolling downwards, only here for dev purposes
                    console.log('moving DOWN the page');
        
                } else {
                    //only piece that matters
                    $('nav')
                        .stop(true, false)
                        .removeClass('animateOut')
                        .addClass('animateIn');        
                    // scrolling upwards 
                    console.log('moving UP the page');
                }
        
                position = scroll;
            });
        
        });
    }

    render() {
        return (
            <nav className="navigation">
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
            </nav>
        );
    }
}