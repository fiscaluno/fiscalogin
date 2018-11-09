import React from 'react';

import {
    BrowserRouter,
    Switch, 
    Route
} from 'react-router-dom';

import Home from '../components/Body';
import Search from '../components/pages/search';
import MainSearchResult from '../components/pages/search/components/MainInstitutionReview';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/search/details" component={MainSearchResult} />
        </Switch>
    </BrowserRouter>
);

export default Routes;