import React from 'react'
import { Header, Banner, Cards, Footer, HICOOL } from '../../index.js';
import './Home.css';


export default class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <div className="Header">
                    <Header />
                </div>
                <div className="Banner">
                    <Banner />
                </div>
                <div>
                    <Cards />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}