import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import CollectPointsMap from './pages/CollectPointsMap';

import CreateCollectPoint from './pages/CreateCollectPoint';
import CollectPoint from './pages/CollectPoint';

function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={CollectPointsMap} />
                
                <Route path="/collectpoints/create" component={CreateCollectPoint} />
                <Route path="/collectpoints/:id" component={CollectPoint} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
