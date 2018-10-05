import React, { Component } from "react";

import Header from './Header';
export default class Home extends Component {
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
    if (localStorage.getItem('@FISCALUNO:SearchType')){      
      localStorage.removeItem('@FISCALUNO:SearchType');
      localStorage.setItem('@FISCALUNO:SearchType', props);
    } else {
      localStorage.setItem('@FISCALUNO:SearchType', props);
    }
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
              }>
                <span onClick={this.handleClick.bind(this, 'Institutions')}>
                  Instituições
                </span>
              </li>  
              <li className={ this.state.btnState === 'Courses' 
                ? 'clickedState' 
                : 'notClicked' 
              }>
                <span onClick={this.handleClick.bind(this, 'Courses')}>
                  Cursos
                </span>
              </li>
              <li className={ this.state.btnState === 'Exams' 
                  ? 'clickedState' 
                  : 'notClicked' 
                }>
                <span onClick={this.handleClick.bind(this, 'Exams')}>
                  Vestibulares
                </span>
              </li>           
            </ul>
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
