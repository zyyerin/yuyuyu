import React from 'react'
import { Header, Footer, IntroBanner } from '../../index.js';
import hicool_img_480 from '../../images/HICOOL720x480.png';
import '../styles/projects.css';

export default class HICOOL extends React.Component {
    render() {
        return (
            <div className="project">
                <Header />
                <IntroBanner companyName="HICOOL" brief="Event branding for HICOOL 2020." img={hicool_img_480}/>
                {/* <Exterior /> */}
                <div className="module"> 
                    <div className="project-subtitle-text"> 
                        Exterior
                    </div>
                    <div className="exterior-images">
                        <div className="exterior-image1"></div>
                        <div className="exterior-textbox">
                            <div className="exterior-headline">
                                Headline
                            </div>
                            <div className="exterior-context">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                            </div>
                            <div className="exterior-get-started">
                                Get started ->
                            </div>
                        </div>
                        <div className="exterior-image2"></div>
                        <div className="exterior-image3"></div>
                    </div>
                </div>
                {/* <Interior/> */}
                <div className="module"> 
                    <div className="project-subtitle-text"> 
                        Interior
                    </div>
                    <div className="interior-images">
                        <div className="interior-image1"></div>
                        <div className="interior-image2"></div>
                        <div className="interior-image3"></div>
                        <div className="interior-image4"></div>
                    </div>
                </div>
                {/* <Stage /> */}
                <div className="module"> 
                    <div className="project-subtitle-text"> 
                        Stage
                    </div>
                    <div className="stage-images">
                        <div className="stage-image1"></div>
                        <div className="stage-image2"></div>
                        <div className="stage-textbox">
                            <div className="exterior-headline">
                                Headline
                            </div>
                            <div className="exterior-context">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.
                            </div>
                            <div className="exterior-get-started">
                                Get started ->
                            </div>
                        </div>
                        <div className="stage-image3"></div>
                    </div>
                </div>
                {/* <Exhibition /> */}
                <div className="module"> 
                    <div className="project-subtitle-text"> 
                        Exhibition
                    </div>
                    <div className="exhibition-images">
                        <div className="exhibition-image1"></div>
                        <div className="exhibition-image2"></div>
                        <div className="exhibition-image3"></div>
                        <div className="exhibition-image4"></div>
                    </div>
                </div>
                {/* <OnlinePromotionAssets /> */}
                <div className="module"> 
                    <div className="project-subtitle-text"> 
                        Online Promotion Assets
                    </div>
                    <div className="onlinePromotionAssets-images">
                        <div className="onlinePromotionAssets-image1"></div>
                        <div className="onlinePromotionAssets-image2"></div>
                        <div className="onlinePromotionAssets-image3"></div>
                        <div className="onlinePromotionAssets-image4"></div>
                        <div className="onlinePromotionAssets-image5"></div>
                        <div className="onlinePromotionAssets-image6"></div>
                        <div className="onlinePromotionAssets-image7"></div>
                        <div className="onlinePromotionAssets-image8"></div>
                    </div>
                </div>
                <Footer />
            </div>
        );
        
    }
}