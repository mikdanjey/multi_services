import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import ScrollToTopRoute from './ScrollToTopRoute';

import AppLayout from './AppLayout';

import Dashboard1 from './component/Dashboard1';
import Dashboard2 from './component/Dashboard2';

class App extends Component {

    checkNot404 = pathname => {
        const URLs = ["/", "/dashboard1", "/dashboard2"];
        if (URLs.includes(pathname)) { // Static URLs
            return true;
        } else if (pathname.startsWith("/blog/")) { // Dynamic URLs
            return true;
        } else {
            return false; // It's a 404
        }
    }

    render() {
        return (
            <Route render={({ location }) => (
                <Switch location={location}>
                    {this.checkNot404(location.pathname) &&
                        <React.Fragment>
                            <AppLayout>
                                <ScrollToTopRoute exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard1} />
                                <ScrollToTopRoute exact path={`${process.env.PUBLIC_URL}/dashboard1`} component={Dashboard1} />
                                <ScrollToTopRoute exact path={`${process.env.PUBLIC_URL}/dashboard2`} component={Dashboard2} />
                            </AppLayout>
                        </React.Fragment>
                    }
                    {!this.checkNot404(location.pathname) &&
                        <React.Fragment>
                            <h1>Not Found</h1>
                        </React.Fragment>
                    }
                </Switch>
            )} />
        );
    }
}

export default App;