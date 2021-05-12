import React from 'react'
import { Header, Banner, Cards, Footer } from '../../index.js';
import './Home.css';


export default class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <Header/>
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