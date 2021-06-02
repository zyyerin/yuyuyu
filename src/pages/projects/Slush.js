import React from 'react'
import { Header, Footer, IntroBanner, SlushTemplate } from '../../index.js';
import slush_hero from '../../images/SZ19/Hero.jpg';
import '../styles/projects.css';
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
            <div className="project">
                <div className="Header">
                    <Header />
                    <IntroBanner companyName="Slush China" brief="Slush is..." img={slush_hero}/>
                    {/* <SlushSZ /> */}
                    <div className="module"> 
                        <div className="project-subtitle-text"> 
                            Slush Shenzhen 2019
                        </div>
                        <div className="slush-sz-images">
                            <div className="slush-sz-image"></div>
                            <div className="slush-sz-textbox">
                                <div className="slush-sz-headline">
                                    @Pingshan
                                </div>
                                <div className="slush-sz-context">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                                </div>
                                <div className="slush-sz-label">
                                    Get Started -> 
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <SlushExterior /> */}
                    <div className="module"> 
                        <div className="project-subtitle-text"> 
                            Exterior
                        </div>
                        <div className="slush-exterior-images">
                            <div className="slush-exterior-image1"></div>
                            <div className="slush-exterior-image2"></div>
                            <div className="slush-exterior-image3"></div>
                            <div className="slush-exterior-image4"></div>
                        </div>
                    </div>
                    <SlushTemplate subtitle="Interior" height1="380px" height2="380px" img1={slush_interior_1} img2={slush_interior_2} img3={slush_interior_3} img4={slush_interior_4}/>
                    <SlushTemplate subtitle="Music Festival" height1="400px" height2="400px" img1={slush_mus_fes_1} img2={slush_mus_fes_2} img3={slush_mus_fes_3} img4={slush_mus_fes_4}/>
                    {/* <SlushGifts /> */}
                    <div className="module"> 
                        <div className="project-subtitle-text"> 
                            Merchandise & Gifts
                        </div>
                        <div className="slush-gifts-images">
                            <div className="slush-gifts-image1"></div>
                            <div className="slush-gifts-image2"></div>
                            <div className="slush-gifts-image3"></div>
                            <div className="slush-gifts-image4"></div>
                            <div className="slush-gifts-image5"></div>
                            <div className="slush-gifts-image6"></div>
                        </div>
                    </div>
                    {/* <SlushSH /> */}
                    <div className="module"> 
                        <div className="project-subtitle-text"> 
                            Slush Shanghai 2019
                        </div>
                        <div className="slush-sh-images">
                            <div className="slush-sh-image1"></div>
                            <div className="slush-sh-textbox">
                                <div className="slush-sh-headline">
                                    @Shanghai
                                </div>
                                <div className="slush-sh-context">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                                </div>
                                <div className="slush-sh-label">
                                    Get Started -> 
                                </div>
                            </div>
                            <div className="slush-sh-image2"></div>
                            <div className="slush-sh-image3"></div>
                            <div className="slush-sh-image4"></div>
                            <div className="slush-sh-image5"></div>
                            <div className="slush-sh-image6"></div>
                            <div className="slush-sh-image7"></div>
                            <div className="slush-sh-image8"></div>
                            <div className="slush-sh-image9"></div>
                            <div className="slush-sh-image10"></div>
                        </div>
                    </div>
                    {/* <SlushStage /> */}
                    <div className="module"> 
                        <div className="project-subtitle-text"> 
                            Slush Shanghai 2019
                        </div>
                        <div className="slush-stage-images">
                            <div className="slush-stage-image1"></div>
                            <div className="slush-stage-textbox">
                                <div className="slush-stage-headline">
                                    4 Stages
                                </div>
                                <div className="slush-stage-context">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                                </div>
                                <div className="slush-stage-label">
                                    Get Started -> 
                                </div>
                            </div>
                            <div className="slush-stage-image2"></div>
                            <div className="slush-stage-image3"></div>
                            <div className="slush-stage-image4"></div>
                            <div className="slush-stage-image5"></div>
                            <div className="slush-stage-image6"></div>
                            <div className="slush-stage-image7"></div>
                            <div className="slush-stage-image8"></div>
                            <div className="slush-stage-image9"></div>
                            <div className="slush-stage-image10"></div>
                            <div className="slush-stage-image11"></div>
                            <div className="slush-stage-image12"></div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
        
    }
}