import React, { Component } from "react";
import api from "../services/api";
import logo from "../images/logo.png";
import "../style/style.css";

class Header extends Component {
  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: "368036867038805",
        cookie: true,
        xfbml: true,
        version: "v3.0"
      });

      window.FB.AppEvents.logPageView();
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

  constructor() {
    super();
    this.state = { loginObject: [], title: "ENTRAR" };
  }

  facebookLogin = () => {
    window.FB.login(
      function(resp) {
        this.statusChangeCallback(resp);
        console.log(resp);
      }.bind(this),
      {
        scope: "email"
      }
    );
  };

  checkLoginState() {
    console.log("Checando status de login...........");

    window.FB.getLoginStatus(
      function(response) {
        alert("FB Callback");
        console.log("----------->");
        console.log(response);
        this.statusChangeCallback(response);
      }.bind(this)
    );
  }

  statusChangeCallback(response) {
    console.log("statusChangeCallback");
    console.log(response);
    if (response.status === "connected") {
      console.log("Conectado");
      this.fetchDataFacebook();
    } else if (response.status === "not_authorized") {
      console.log("Erro de importação: autorize o app para exportar dados");
    } else {
      console.log("Ocorreu erro enquanto estava importando os dados");
    }
  }

  fetchDataFacebook = () => {
    console.log("Adquirindo informações.... ");

    window.FB.api(
      "/me",
      function(user) {
        console.log(user);
        console.log("Logado através do facebook com sucesso: " + user.name);
        this.setState({ title: "Bem vindo, " + user.name });
        this.handleLoginRequest(user.id);
      }.bind(this)
    );
  };

  handleLoginRequest = id => {
    let fbData = JSON.stringify({
      facebookID: id
    });

    try {
      console.log("Enviando para a API.");
      api
        .post(
          "https://fiscaluno-mu.herokuapp.com/users",
          { logs: fbData },
          { headers: { "Content-Type": "text/json" } }
        )
        .then(response => {
          console.log("Enviado.");
          console.log(response.data);
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
              <span onClick={this.facebookLogin}>{this.state.title}</span>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;