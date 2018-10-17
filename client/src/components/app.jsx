import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './Home';
import MenuNav from './MenuNav';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path ="/menu/:page" component={MenuNav} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;