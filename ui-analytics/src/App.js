import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import ScrollToTopRoute from './ScrollToTopRoute';

import AppLayout from './AppLayout';

import Page1 from './component/Page1';
import Page2 from './component/Page2';

class App extends Component {

    checkNot404 = pathname => {
        const URLs = ["/", "/page1", "/page2"];
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
                                <ScrollToTopRoute exact path={`${process.env.PUBLIC_URL}/`} component={Page1} />
                                <ScrollToTopRoute exact path={`${process.env.PUBLIC_URL}/page2`} component={Page2} />
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