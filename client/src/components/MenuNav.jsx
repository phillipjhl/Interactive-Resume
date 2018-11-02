import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import HomePage from './Home';

export default class MenuNav extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/menu/resume" component={Resume} />
                        <Route path="/menu/portfolio" component={Portfolio} />
                        <Route path="/menu/contact" component={Contact} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }

}