import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import api from './services/api';

class App extends Component {

  state = {
    tokenDefault: 'X-Client-ID:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImNsaWVudCI6ImFueSJ9LCJpc3MiOiJtdSJ9.k7uGe0qbuwwxAp_UOVGVft4eAJwDc_FnaZg-pmwzUZ0',

  };

  handleLoginRequest = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`${this.state.tokenDefault}`);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <a href='' onClick={this.handleLoginRequest}>Buscar</a>
    );
  }
}

render(<App />, document.getElementById("app"));
