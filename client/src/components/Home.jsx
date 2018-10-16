import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import NameBlock from './NameBlock';

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

                        <NameBlock />

                        <div className="menu-blocks">

                            <div className="about-block menu-block">
                                <div className="about-block-container">
                                    <h2 className="about menu-item text-primary">Resume</h2>
                                </div>
                            </div>

                            <div className="portfolio-block menu-block">
                                <div className="portfolio-block-container">
                                    <h2 className="portfolio menu-item text-primary">Portfolio</h2>
                                </div>
                            </div>

                            <Link to='/contact'>
                                <div className="contact-block menu-block">
                                    <div className="contact-block-container">
                                        <h2 className="contact menu-item text-primary">Contact</h2>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </section>

            </Fragment>
        );
    }
}

export default HomePage;