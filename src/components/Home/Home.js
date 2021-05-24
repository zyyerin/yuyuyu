import React from 'react'
import { Header, Banner, Cards, Footer } from '../../index.js';
import './Home.css';


export default class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <Header/>

                <div className="home-content">
                    <div className="Banner">
                        <Banner />
                    </div>
                    <div>
                        <Cards />
                    </div>
                    <div className="more-projects">
                        More Projects coming soon...
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}