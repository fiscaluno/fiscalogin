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
    console.log(props);
    if (localStorage.getItem('@FISCALUNO:SearchType')){      
      localStorage.clear('@FISCALUNO:SearchType');
      localStorage.setItem('@FISCALUNO:SearchType', this.state.btnState);
    } else {
      localStorage.setItem('@FISCALUNO:SearchType', this.state.btnState);
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
              <li className={ this.state.btnState === 'Exams' 
                  ? 'clickedState' 
                  : 'notClicked' 
                }
                onClick={this.handleClick.bind(this, 'Exams')}>
                <span>
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
