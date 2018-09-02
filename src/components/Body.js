import React, { Component } from "react";

import Header from './Header';
export default class Home extends Component {
  state = {
    formData: {},
    errorCheck: 0
  };

  searchRequest = e => {
    e.preventDefault();
    this.props.history.push('/search');
    localStorage.setItem('@FISCALUNO:SearchData', JSON.stringify(this.state.formData));
  };

  handleChange = e => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value }
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div id="content" className="contentDiv">
          <div>
            <h3>A faculdade ideal, avaliada por estudantes como você.</h3>
            <form id="engineForm" onSubmit={this.searchRequest}>
              <input type="text" name="faculdade" placeholder="Faculdade..." onChange={this.handleChange}/>
              <input type="text" name="curso" placeholder="Curso..." onChange={this.handleChange}/>
              <button type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
