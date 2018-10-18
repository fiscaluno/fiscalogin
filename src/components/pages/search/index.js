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
  };

  componentDidMount() {
    this.handleCalls(JSON.parse(localStorage.getItem('@FISCALUNO:SearchData')));
  };

  handleCalls = async (formData) => {
    let filter = localStorage.getItem('@FISCALUNO:SearchType');
    console.log(formData)
    console.log(filter);
    switch (JSON.parse(filter)) {
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
          this.props.history.push('/');
        };
        break;
      case 'Exams':
        console.log(JSON.parse(filter));
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