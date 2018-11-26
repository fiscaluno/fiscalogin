import React from 'react';

import StarRatings from 'react-star-ratings';

import { Polar } from 'react-chartjs-2';

import Header from '../../../../Header';

let object = JSON.parse(localStorage.getItem('@FISCALUNO:ObjectToBeDetailed'));

let starDimension = '30px';

let chartData = {};

if (!object.course_average_rating){
    chartData = {
        datasets: [{
            data: [
                object.average_rating,
                object.average_rating,
                object.average_rating,
                object.average_rating
            ],
            backgroundColor: [
                '#FF6384',
                '#4BC0C0',
                '#FFCE56',
                '#E7E9ED',
            ],
            label: 'Avaliações' // for legend
        }],
        labels: [
            'Média de aprovação da universidade',
            'Média de engajamento dos cursos',
            'Média de avaliação da infraestrutura',
            'Média de avaliação do atendimento'
        ]
    };   
}else{
    chartData = {
        datasets: [{
            data: [
                object.course_average_rating,
                object.course_average_rating,
                object.course_average_rating,
                object.course_average_rating
            ],
            backgroundColor: [
                '#FF6384',
                '#4BC0C0',
                '#FFCE56',
                '#E7E9ED',
            ],
            label: 'Avaliações' // for legend
        }],
        labels: [
            'Média de aprovação da universidade',
            'Média de engajamento dos cursos',
            'Média de avaliação da infraestrutura',
            'Média de avaliação do atendimento'
        ]
    }; 
}

const MainSearchResult = () => (
    <div>
        <Header />
        <div id="containerReview">
            <div id="institutionReviewTitle">
                <h2>Como é estudar na(o) {object.name}?</h2>
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
                        rating={object.average_rating}
                        starDimension="40px"
                        starSpacing="15px"
                        starRatedColor="#258bbc"
                    />
                    <p>
                        ({object.average_rating})
                    </p>
                </div>
                <div id="nonOrderedRatingsList">
                    <ul id="starRatingsDivDetailed">
                        <li>
                            <p>
                                Benefícios 
                            </p>
                            <StarRatings
                                id="detailed"
                                rating={object.average_rating}
                                starDimension={starDimension}
                                starSpacing="5px"
                                starRatedColor="#258bbc"
                            />
                        </li>
                        <li>
                            <p>
                                Impulsionamento de carreira 
                            </p>
                            <StarRatings
                                id="detailed"
                                rating={object.average_rating}
                                starDimension={starDimension}
                                starSpacing="5px"
                                starRatedColor="#258bbc"
                            />
                        </li>
                        <li>
                            <p>
                                Cultura da instituição
                            </p>
                            <StarRatings
                                id="detailed"
                                rating={object.average_rating}
                                starDimension={starDimension}
                                starSpacing="5px"
                                starRatedColor="#258bbc"
                            />
                        </li>
                        <li>
                            <p>
                                Qualidade de ensino
                            </p>
                            <StarRatings
                                id="detailed"
                                rating={object.average_rating}
                                starDimension={starDimension}
                                starSpacing="5px"
                                starRatedColor="#258bbc"
                            />
                        </li>
                    </ul>
                </div>
                <div id="polarChart">
                    <Polar
                        data={chartData}
                        options={{
                            title:{
                                display:'Teste1',
                                text:'Avaliações da universidade',
                                fontSize:25
                            },
                                legend:{
                                display:'Testedisplaylegenda',
                                position:'bottom'
                            }
                        }}
                    />
                </div>
            </div>
            <hr />
        </div>
    </div>
)

export default MainSearchResult;