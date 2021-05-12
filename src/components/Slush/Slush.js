import React from 'react'
import { Header, Footer, IntroBanner, SlushSZ, SlushExterior, SlushTemplate } from '../../index.js';
import slush_hero from '../../images/SZ19/Hero.jpg';
import "./Slush.css";
import slush_interior_1 from '../../images/SZ19/interior_01.jpg';
import slush_interior_2 from '../../images/SZ19/interior_02.jpg';
import slush_interior_3 from '../../images/SZ19/interior_03.jpg';
import slush_interior_4 from '../../images/SZ19/interior_04.jpg';
import slush_mus_fes_1 from '../../images/SZ19/musicFes_01.jpg';
import slush_mus_fes_2 from '../../images/SZ19/musicFes_02.jpg';
import slush_mus_fes_3 from '../../images/SZ19/musicFes_03.jpg';
import slush_mus_fes_4 from '../../images/SZ19/musicFes_04.jpg';
export default class Slush extends React.Component {
    render() {
        return (
            <div>
                <div className="Header">
                    <Header />
                    <IntroBanner companyName="Slush China" brief="Slush is..." img={slush_hero}/>
                    <SlushSZ />
                    <SlushExterior />
                    <SlushTemplate subtitle="Interior" height1="380px" height2="380px" img1={slush_interior_1} img2={slush_interior_2} img3={slush_interior_3} img4={slush_interior_4}/>
                    <SlushTemplate subtitle="Music Festival" height1="400px" height2="400px" img1={slush_mus_fes_1} img2={slush_mus_fes_2} img3={slush_mus_fes_3} img4={slush_mus_fes_4}/>
                    <Footer />
                </div>
            </div>
        );
        
    }
}