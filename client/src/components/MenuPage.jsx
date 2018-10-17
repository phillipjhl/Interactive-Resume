import React, { Component, Fragment } from 'react';

import NavBar from './NavBar';
import Contact from './Contact';

export default class MenuPage extends Component {

    render() {
        return (
            <Fragment>
                <NavBar />
                <Contact />
            </Fragment>
        );
    }

}