import React, { Component, Fragment } from 'react';
import bg from '../docs/light-bg.jpg';

import NameBlock from './NameBlock';
import MenuBlocks from './MenuBlocks';

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

                        <MenuBlocks />

                    </div>
                </section>

            </Fragment>
        );
    }
}

export default HomePage;