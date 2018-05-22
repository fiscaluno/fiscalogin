import React, { Component } from "react";
import api from "../services/api";
import logo from "../images/logo.png";
import "../style/style.css";

class Header extends Component {
  constructor() {
    super();
    this.state = { loginObject: [] };
  }

  handleLoginRequest = e => {
    try {
      api.get().then(response => {
        this.setState({ loginObject: response.data.result });
      });

      //console.log(loginObject);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <ul>
            <li>
              <img src={logo} className="App-logo" alt="logo" />
            </li>
            <li>
              <h1 className="App-title">FISCALUNO</h1>
            </li>
            <li className="App-login">
              <span>ENTRAR</span>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
