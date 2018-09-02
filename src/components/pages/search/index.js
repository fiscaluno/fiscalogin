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
  componentDidMount() {
    if (!localStorage.getItem('@FISCALUNO:SearchData')){
      this.props.history.push('/');
    } else {
      const { curso, faculdade } = JSON.parse(localStorage.getItem('@FISCALUNO:SearchData'));
      this.handleCalls(curso, faculdade);
    }
  };

  state = {
    searchData: []
  };

  handleCalls = async (curso, faculdade) => {
    try{
      searchCourse.get()
        .then(response => {
          this.setState({ ...this.state.searchData, searchData: response.data });
          console.log(this.state.searchData);
          this.state.searchData.result.forEach(element => {
            this.mountReviews(element);
          });
        })
    }catch (err) {
      console.log(err);
    };
  };

  mountReviews = (component) => {
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