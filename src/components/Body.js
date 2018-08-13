import React, { Component } from "react";

import Header from './Header';
class Home extends Component {
  searchRequest = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Header />
        <div id="content" className="contentDiv">
          <div>
            <h3>A faculdade ideal, avaliada por estudantes como você.</h3>
            <form id="engineForm" onSubmit={this.searchRequest}>
              <input type="text" placeholder="Faculdade..." />
              <input type="text" placeholder="Curso..." />
              <button type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
