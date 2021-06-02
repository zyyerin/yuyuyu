import React from 'react'
import { Header, Banner, Cards, Footer } from '../index.js';
import './styles/Home.css';


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
                    <div className="announcement">
                        More Projects coming soon...
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }
}