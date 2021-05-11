import React from 'react'
import './Exterior.css';

export default class Exterior extends React.Component {
    render() {
        return (
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
        );
        
    }
}