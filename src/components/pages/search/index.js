import React, { Component } from 'react';

import {
  searchCourse,
  searchInstitution,
/*  searchCourseWithID,
  searchInstitutionWithID*/
} from '../../../services';

import Header from '../../Header';
import InstitutionHeader from './components/InstitutionHeader';
import MainSearchResult from './components/MainInstitutionReview';

export default class Search extends Component {
  state = {
    searchData: [],
    searchType: ''
  };

  componentDidMount() {
    if (!localStorage.getItem('@FISCALUNO:SearchData') 
      && !localStorage.getItem('@FISCALUNO:SearchType')){
      this.props.history.push('/');
    } else {
      const { curso, faculdade } = JSON.parse(localStorage.getItem('@FISCALUNO:SearchData'));
      this.handleCalls(curso, faculdade);

      this.setState({
        ...this.state.searchType, searchType: localStorage.getItem('@FISCALUNO:SearchType')
      });
      console.log(this.state.searchType);
    }
  };

  handleCalls = async (curso, faculdade) => {
    switch (this.state.searchType) {
      case 'Institutions':
        break;
      case 'Course':
        try{
          searchCourse.get()
            .then(response => {
              console.log(response);
              this.setState({ ...this.state.searchData, searchData: response.data });
              console.log(this.state.searchData);
              this.state.searchData.result.forEach(element => {
                this.mountCoursesList(element);
              });
            })
        }catch (err) {
          console.log(err);
        };
        break;
      case 'Exams':
        break;
      default:
        this.props.history.push('/');
        break;
    }
  };

  mountCoursesList = (component) => {
    console.log(component);
  };

  render() {
    return(
      <div>
        <Header />
        {}
        <div id="elementInstitutionSearch">
          <InstitutionHeader /> 
        </div>
        <div id="elementInstitutionReview">
          <MainSearchResult />
        </div>
      </div>
    );
  };
};