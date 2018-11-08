import React, { Component } from "react";

import Header from './Header';
export default class Home extends Component {

  componentDidMount() {
    localStorage.removeItem('@FISCALUNO:SearchData');
    localStorage.removeItem('@FISCALUNO:SearchType');
  }

  state = {
    formData: {},
    errorCheck: 0,
    btnState: ''
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

  handleClick = props => {
    this.setState({
      ...this.state.btnState, btnState: props
    });
    console.log(props);
    localStorage.setItem('@FISCALUNO:SearchType', JSON.stringify(props));
  };

  render() {
    return (
      <div>
        <Header />
        <div id="content" className="contentDiv">
          <div>
            <h3>A faculdade ideal, avaliada por estudantes como você.</h3>
            <ul>
              <li className={ this.state.btnState === 'Institutions' 
                ? 'clickedState' 
                : 'notClicked' 
              }
              onClick={this.handleClick.bind(this, 'Institutions')}>
                <span>
                  Instituições
                </span>
              </li>  
              <li className={ this.state.btnState === 'Courses' 
                ? 'clickedState' 
                : 'notClicked' 
              }
              onClick={this.handleClick.bind(this, 'Courses')}>
                <span>
                  Cursos
                </span>
              </li>
            </ul>
            <form id="engineForm" onSubmit={this.searchRequest}>
              <input type="text" name="faculdade" placeholder="Faculdade..." onChange={this.handleChange}/>
              <input 
                type="text" 
                name={
                  this.state.btnState === 'Institutions'
                  ? 'Cidade...'
                  : 'Curso...'
                } 
                placeholder={
                  this.state.btnState === 'Institutions'
                  ? 'Cidade...'
                  : 'Curso...'
                } 
                onChange={this.handleChange}/>
              <button type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
