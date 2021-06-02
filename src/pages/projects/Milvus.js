import React from 'react'
import { Header, Footer, IntroBanner } from '../../index.js';
import milvus_img_480 from '../../images/Milvus720x480.png';
import '../styles/projects.css';

export default class Milvus extends React.Component {
    render() {
        return (
            <div className="project">
                <div className="Header">
                    <Header />
                    <IntroBanner companyName="Milvus" brief="Milvus is an open-source vector database." img={milvus_img_480}/>
                    {/* <MilvusAbout /> */}
                    <div className="module"> 
                        <div className="project-subtitle-text"> 
                            About the Product
                        </div>
                        <div className="milvus-about-images">
                            <div className="milvus-about-image"></div>
                            <div className="milvus-about-textbox">
                                <div className="milvus-about-headline">
                                    Milvus
                                </div>
                                <div className="milvus-about-context">
                                    Milvus is an open-source vector database that is highly flexible, reliable, and blazing fast. It supports adding, deleting, updating, and near real-time search of vectors on a trillion-byte scale.
                                </div>
                                <div className="milvus-about-label">
                                    More about Milvus on milvus.io -> 
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <MilvusMascot /> */}
                    <div className="module"> 
                        <div className="project-subtitle-text"> 
                            Mascot
                        </div>
                        <div className="milvus-mascot-images">
                            <div className="milvus-mascot-image"></div>
                            <div className="milvus-mascot-textbox">
                                <div className="milvus-mascot-headline">
                                    Milvus
                                </div>
                                <div className="milvus-mascot-context">
                                    Milvus is an open-source vector database that is highly flexible, reliable, and blazing fast. It supports adding, deleting, updating, and near real-time search of vectors on a trillion-byte scale.
                                </div>
                                <div className="milvus-mascot-label">
                                    More mascot Milvus on milvus.io -> 
                                </div>
                            </div>
                            <div className="milvus-mascot-image2"></div>
                            <div className="milvus-mascot-image3"></div>
                            <div className="milvus-mascot-image4"></div>
                            <div className="milvus-mascot-image5"></div>
                            <div className="milvus-mascot-image6"></div>
                        </div>
                    </div>
                    {/* <MilvusDiagrams /> */}
                    <div className="module"> 
                        <div className="project-subtitle-text"> 
                            Diagrams
                        </div>
                        <div className="milvus-diagrams-images">
                            <div className="milvus-diagrams-image1"></div>
                            <div className="milvus-diagrams-image2"></div>
                            <div className="milvus-diagrams-image3"></div>
                            <div className="milvus-diagrams-image4"></div>
                        </div>
                    </div>
                    {/* <MilvusGifts /> */}
                    <div className="module"> 
                        <div className="project-subtitle-text"> 
                            Merchandise & Gifts
                        </div>
                        <div className="milvus-gifts-images">
                            <div className="milvus-gifts-image1"></div>
                            <div className="milvus-gifts-image2"></div>
                            <div className="milvus-gifts-image3"></div>
                            <div className="milvus-gifts-image4"></div>
                            <div className="milvus-gifts-image5"></div>
                            <div className="milvus-gifts-image6"></div>
                        </div>
                    </div>
                    {/* <MilvusConf /> */}
                    <div className="module"> 
                        <div className="project-subtitle-text"> 
                            Milvus Community Conf 2020
                        </div>
                        <div className="milvus-conf-images">
                            <div className="milvus-conf-image1"></div>
                            <div className="milvus-conf-textbox">
                                <div className="milvus-conf-headline">
                                    Oct 17th, Beijing
                                </div>
                                <div className="milvus-conf-context">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra.
                                </div>
                                <div className="milvus-conf-label">
                                    More -> 
                                </div>
                            </div>
                            <div className="milvus-conf-image2"></div>
                            <div className="milvus-conf-image3"></div>
                            <div className="milvus-conf-image4"></div>
                            <div className="milvus-conf-image5"></div>
                            <div className="milvus-conf-image6"></div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
        
    }
}