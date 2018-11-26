import React from 'react';

import StarRatings from 'react-star-ratings';

import Header from '../../../../Header';

let object = JSON.parse(localStorage.getItem('@FISCALUNO:CourseToBeDetailed'));

export const courseDetails = () => (
    <div>
        <Header />
        <div id="containerReview">
            <div id="institutionReviewTitle">
                <h2>{object.course_name}</h2>
                <hr />
            </div>
            <div id="institutionReviewContent">
                <p>
                    <strong>
                        Satisfação geral dos alunos
                    </strong>
                </p>
                <div id="starRatingsDiv">
                    <StarRatings
                        rating={object.course_average_rating}
                        starDimension="40px"
                        starSpacing="15px"
                        starRatedColor="#258bbc"
                    />
                    <p>
                        ({object.course_average_rating})
                    </p>
                </div>
                <div id="nonOrderedRatingsList">
                    <ul id="starRatingsDivDetailed">
                        <li>
                            <p>
                                <h3>
                                    Tipo de curso: {object.course_type};
                                </h3>
                            </p>
                        </li>
                        <li>
                            <p>
                                <h3>
                                    Períodos: {object.course_periods[0]};
                                </h3>
                            </p>
                        </li>
                        <li>
                            <p>
                                <h3>
                                    Tempo médio para graduação: {object.course_time_to_graduate_range[0]} a {object.course_time_to_graduate_range[1]};
                                </h3>
                            </p>
                        </li>
                        <li>
                            <p>
                                <h3>
                                    Valor mensal: de R${object.course_monthly_value_range[0]} a R${object.course_monthly_value_range[1]};
                                </h3>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    </div>
)