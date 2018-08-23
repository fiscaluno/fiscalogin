import React, { Component } from 'react';

import './searchStyle.css';

import {
  searchCourse,
/*  searchCourseWithID,
  searchInstitution,
  searchInstitutionWithID*/
} from '../../../services';

import Header from '../../Header';

export default class Search extends Component {
  componentDidMount() {
    const { curso, faculdade } = JSON.parse(localStorage.getItem('@FISCALUNO:SearchData'));
    this.handleCallToRequest(curso, faculdade);
  }

  state = {
    searchData: []
  }

  handleCallToRequest = async (curso, faculdade) => {
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
      <Header />
    );
  };
};