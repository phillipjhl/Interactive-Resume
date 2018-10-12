import React, { Component, Fragment } from 'react';

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <section className="home">
                    <div className="overlay opacity3"></div>
                    <div className="container">
                        <div className="name-block">
                            <div className="name-block-container">
                                <h1 className="text-primary"><span>Hi, I'm</span>Phillip Langland</h1>
                            </div>
                        </div>
                        <div className="menu-blocks">
                            <div className="about-block menu-block">
                                <div className="about-block-container">
                                    <h1 className="text-primary">Resume</h1>
                                </div>
                            </div>
                            <div className="portfolio-block menu-block">
                                <div className="portfolio-block-container">
                                    <h1 className="text-primary">Portfolio</h1>
                                </div>
                            </div>
                            <div className="contact-block menu-block">
                                <div className="contact-block-container">
                                    <h1 className="text-primary">Contact</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default HomePage;