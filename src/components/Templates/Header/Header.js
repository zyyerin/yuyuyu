import React from "react";
import './Header.css';
import logo from '../../../images/yuyuyu.svg';
import menu_svg from '../../../images/menu.svg';
import $ from 'jquery'

export default class Header extends React.Component {
    async componentDidMount(){    

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
                    // console.log('moving DOWN the page');
        
                } else {
                    //only piece that matters
                    $('nav')
                        .stop(true, false)
                        .removeClass('animateOut')
                        .addClass('animateIn');        
                    // scrolling upwards 
                    // console.log('moving UP the page');
                }
        
                position = scroll;
            });
        
        });

        var query = "slush"
        const data = {
            "query": query,
            "search_fields": {
              "name": {},
              "location": {},
              "year": {}
            },
            "result_fields": {
              "name": {
                "snippet": {
                  "size": 75,
                  "fallback": true
                }
              },
              "project_url": {
                "raw": {}
              },
              "location": {
                "snippet": {
                  "size": 75,
                  "fallback": true
                }
              },
              "year": {
                "snippet": {
                  "size": 75,
                  "fallback": true
                }
              }
            },
            // "page": {
            //   "size": 20,
            //   "current": 1
            // }
        }
        // Default options are marked with *
        var url = "https://yuyuyu-deployment.ent.us-west1.gcp.cloud.es.io/api/as/v1/engines/yuyuyu-engine/search"
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer search-23x955yvgw1hmhnduquuq573',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const results = await response.json();
        console.log(results.results); // parses JSON response into native JavaScript objects
    }

    render() {
        return (
            <nav className="navbar">
                <div className="logo">
                     <a href="/">
                         <img src={logo} alt="Logo of Yuyuyu Design"/>
                    </a>
                </div>
                <div className="menu">
                    <div className="disabled">Work</div>
                    <div className="disabled">About</div>
                    <div className="disabled">Contact</div>
                </div> 
                <div className="menu-svg">
                    <img src={menu_svg} alt="menu" />
                </div>
            </nav>
        );
    }
}