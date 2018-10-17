import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import bg from '../docs/light-bg.jpg';

import NameBlock from './NameBlock';

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>

                <section className="home">

                    <img src={bg} className="img-bg"/>

                    <div className="overlay opacity3"></div>

                    <div className="container">

                        <NameBlock />

                        <div className="menu-blocks">

                            <div className="about-block menu-block bg-compliment">
                                <div className="about-block-container">
                                    <h2 className="about menu-item text-primary">Resume</h2>
                                </div>
                            </div>

                            <div className="portfolio-block menu-block bg-contrast">
                                <div className="portfolio-block-container">
                                    <h2 className="portfolio menu-item text-secondary">Portfolio</h2>
                                </div>
                            </div>

                            <Link to='/contact'>
                                <div className="contact-block menu-block bg-primary">
                                    <div className="contact-block-container">
                                        <h2 className="contact menu-item text-secondary">Contact</h2>
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