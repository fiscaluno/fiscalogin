import React, { Component } from "react";

class Body extends Component {
  searchRequest = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App-intro">
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

export default Body;
