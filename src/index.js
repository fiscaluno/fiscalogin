import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import api from "./services/api";

class App extends Component {
  constructor() {
    super();
    this.state = { loginObject: [] };
  }

  handleLoginRequest = e => {
    try {
      api.get().then(response => {
        this.setState({ loginObject: response.data.result });
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return <button onClick={this.handleLoginRequest}>Logar</button>;
  }
}

render(<App />, document.getElementById("app"));
