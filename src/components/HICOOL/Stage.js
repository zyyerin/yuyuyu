import React from 'react'
import './Stage.css';

export default class Stage extends React.Component {
    render() {
        return (
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
        );
        
    }
}