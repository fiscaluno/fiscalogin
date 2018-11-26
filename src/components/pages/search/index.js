import React, { Component, Fragment } from 'react';

import ReactLoading from 'react-loading';

import {
  searchCourse,
  searchInstitution,
} from '../../../services';

import Header from '../../Header';
import ListSearchView from './components/ListSearchView'

export default class Search extends Component {
  componentWillMount() {
    const filter = JSON.parse(localStorage.getItem('@FISCALUNO:SearchType'));

    this.handleCalls(filter);
  }

  state = {
    searchData: [],
    loading: 1
  };

  handleCalls = async (searchType) => {
    console.log(searchType);
    switch (searchType) {

      case 'Institutions':
        console.log('entrei no institutions');
        try {

          console.log('to no try');
          const response = await searchInstitution.get();

          console.log(response);

          this.setState({ 
            searchData: [
              ... this.state.searchData,
              response.data.result
            ],
            loading: 0
          });
          
          console.log(this.state.searchData);

        } catch (err) {

          console.log(err);
          this.props.history.push('/');

        };
        break;

      case 'Courses':
        console.log('entrei no courses');
        // this.props.history.push('/');
        try {

          console.log('to no try');
          const response = await searchCourse.get();

          console.log(response);

          this.setState({ 
            searchData: [
              ... this.state.searchData,
              response.data.result
            ],
            loading: 0
          });
          
          console.log(this.state.searchData);

        } catch (err) {

          console.log(err);
          this.props.history.push('/');

        };
        break;

      case 'Exams':
        console.log(JSON.parse(searchType));
        break;

      default:
        this.props.history.push('/');
        break;

    }
  };

  render() {
    return(
      <Fragment>
        <Header />
        { this.state.loading === 1 
          ? <ReactLoading type={'bubbles'} color={'#000000'} height={'20%'} width={'20%'} />
          : <ListSearchView data={this.state.searchData} />
        }
      </Fragment>
    );
  };
};