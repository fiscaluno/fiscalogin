import React, { Component } from "react";

import Routes from '../routes';

export default class App extends Component {
    componentWillMount() {
        //localStorage.clear();
    };

    render() {
        return(
            <Routes />
        );
    };
};
