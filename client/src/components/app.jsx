import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import NavBar from './NavBar';
import HomePage from './Home';
import Contact from './Contact';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    {/* <NavBar /> */}
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;