import React, { Component } from "react";
import api from "../services/api";
import logo from "../images/logo.png";
import "../style/style.css";

class Header extends Component {
  constructor() {
    super();
    this.state = { loginObject: [], title: "ENTRAR" };
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: "{your-app-id}",
        cookie: true,
        xfbml: true,
        version: "{latest-api-version}"
      });

      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  handleLoginRequest = e => {
    try {
      api.get().then(response => {
        this.setState({ loginObject: response.data, title: "Ola, usuario" });
      });
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
              <span onClick={this.handleLoginRequest}>{this.state.title}</span>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
