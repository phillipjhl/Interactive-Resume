import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './Home';
import MenuPage from './MenuPage';
import Contact from './Contact';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path ="/menu" component={MenuPage} />
                        <Route path="/menu/contact" component={Contact} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;