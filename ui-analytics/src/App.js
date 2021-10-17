import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import ScrollToTopRoute from './ScrollToTopRoute';

import AppLayout from './AppLayout';

import Home from './component/Home';

class App extends Component {

    checkNot404 = pathname => {
        const URLs = ["/", "/page1"];
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
                                <ScrollToTopRoute exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
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