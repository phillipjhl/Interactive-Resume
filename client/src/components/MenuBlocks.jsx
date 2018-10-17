import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MenuBlocks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

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

                <Link to='/menu/contact'>
                    <div className="contact-block menu-block bg-primary">
                        <div className="contact-block-container">
                            <h2 className="contact menu-item text-secondary">Contact</h2>
                        </div>
                    </div>
                </Link>

            </div>

        );
    }
}