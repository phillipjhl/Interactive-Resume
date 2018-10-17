import React from 'react';

function Carousel(props) {

    return (
        <div id="name-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <h2 className="text-primary">Full-Stack Developer</h2>
                </div>
                <div className="carousel-item">
                    <h2 className="text-primary">Mobile Developer</h2>
                </div>
                <div className="carousel-item">
                    <h2 className="text-primary">React Specialist</h2>
                </div>
            </div>
        </div>
    );

}

export default Carousel;