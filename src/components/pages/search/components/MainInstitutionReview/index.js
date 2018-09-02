import React, { Component } from 'react';

import StarRatings from 'react-star-ratings';

import { Polar } from 'react-chartjs-2';

export default class MainSearchResult extends Component {

    state = {
        chartData:{
            datasets: [{
                data: [
                    1.403,
                    4.403,
                    2.403,
                    5.403
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
        },
        starDimension: '30px'
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        location:'City'
    }

    render () {
        return (
            <div id="containerReview">
                <div id="institutionReviewTitle">
                    <h2>Como é estudar na Impacta?</h2>
                    <p>
                        10 postagens (5 avaliações nos últimos 12 meses)
                    </p>
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
                            rating={2.403}
                            starDimension="40px"
                            starSpacing="15px"
                            starRatedColor="#258bbc"
                        />
                        <p>
                            (2.403)
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
                                    rating={2.403}
                                    starDimension={this.state.starDimension}
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
                                    rating={2.403}
                                    starDimension={this.state.starDimension}
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
                                    rating={2.403}
                                    starDimension={this.state.starDimension}
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
                                    rating={2.403}
                                    starDimension={this.state.starDimension}
                                    starSpacing="5px"
                                    starRatedColor="#258bbc"
                                />
                            </li>
                        </ul>
                    </div>
                    <div id="polarChart">
                        <Polar
                            data={this.state.chartData}
                            options={{
                                title:{
                                    display:this.props.displayTitle,
                                    text:'Avaliações da universidade',
                                    fontSize:25
                                },
                                    legend:{
                                    display:this.props.displayLegend,
                                    position:this.props.legendPosition
                                }
                            }}
                        />
                    </div>
                </div>
                <hr />
            </div>
        )
    };
}