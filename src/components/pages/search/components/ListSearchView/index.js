import React from 'react';
import './style.css';

import { withRouter } from "react-router-dom"

import StarRatings from 'react-star-ratings';

let searchType = localStorage.getItem("@FISCALUNO:SearchType");
console.log(searchType);

const ListSearchView = (props) => (
    <div className="resultContainer">
        { props.data[0].map(object => (
            <div className="resultSquareContainer" key={!object.course_id 
                                                        ? object.id
                                                        : object.course_id}>
                <div className="uniPic">
                    <img src={!object.institution_image_url 
                            ? object.image_url
                            : object.institution_image_url} onClick={() => {
                        
                        !object.course_id 
                        ? localStorage.setItem('@FISCALUNO:ObjectToBeDetailed', JSON.stringify(object))
                        : localStorage.setItem('@FISCALUNO:CourseToBeDetailed', JSON.stringify(object))        
                        console.log('tapped');
                        !object.course_id 
                        ? props.history.push('/search/details')
                        : props.history.push('/search/details/course')
                    }} />
                </div>
                <div className="resultDetails">
                    <h2 onClick={() => {
                        !object.course_id 
                        ? localStorage.setItem('@FISCALUNO:ObjectToBeDetailed', JSON.stringify(object))
                        : localStorage.setItem('@FISCALUNO:CourseToBeDetailed', JSON.stringify(object))
                        !object.course_id 
                        ? props.history.push('/search/details')
                        : props.history.push('/search/details/course')
                    }} >{!object.course_name 
                        ? object.name
                        : object.course_name}</h2>
                    <StarRatings
                        rating={!object.course_average_rating 
                                ? object.average_rating
                                : object.course_average_rating}
                        starDimension="25px"
                        starSpacing="8px"
                        starRatedColor="#258bbc"
                    />
                    {!object.course_monthly_value_range 
                    ? <p>{object.address}</p>
                    : <p>Mensalidades variam dentre R${object.course_monthly_value_range[0]} ~ R${object.course_monthly_value_range[1]}</p>}
                    {!object.course_type 
                    ? <p>{object.city} - {object.province} </p>
                    : <p>{object.course_type}</p>}
                </div>
            </div>
        )) }
    </div>
);

export default withRouter (ListSearchView);