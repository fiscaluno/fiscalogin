import React from 'react';

import {
    BrowserRouter,
    Switch, 
    Route
} from 'react-router-dom';

import Home from '../components/Body';
import Search from '../components/pages/search';
import MainSearchResult from '../components/pages/search/components/MainInstitutionReview';
import { courseDetails } from '../components/pages/search/components/CourseDetails';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/search/details" component={MainSearchResult} />
            <Route exact path="/search/details/course" component={courseDetails} />
        </Switch>
    </BrowserRouter>
);

export default Routes;