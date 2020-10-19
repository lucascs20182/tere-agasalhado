import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import CollectPoints from './pages/CollectPoints';

function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={CollectPoints} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
