import React from 'react';
import './style.css';

import { withRouter } from "react-router-dom"

import StarRatings from 'react-star-ratings';

const ListSearchView = (props) => (
    <div className="resultContainer">
        { props.data[0].map(object => (
            <div className="resultSquareContainer" key={object.id}>
                <div className="uniPic">
                    <img src={object.image_url} onClick={() => {
                        localStorage.setItem('@FISCALUNO:ObjectToBeDetailed', JSON.stringify(object));
                        console.log('tapped');
                        props.history.push('/search/details');
                    }} />
                </div>
                <div className="resultDetails">
                    <h2 onClick={() => {
                        localStorage.setItem('@FISCALUNO:ObjectToBeDetailed', JSON.stringify(object));
                        props.history.push('/search/details');
                    }} >{object.name}</h2>
                    <StarRatings
                        rating={object.average_rating}
                        starDimension="25px"
                        starSpacing="8px"
                        starRatedColor="#258bbc"
                    />
                    <p>
                        {object.address}
                    </p>
                    <p>
                        {object.city} - {object.province}
                    </p>
                </div>
            </div>
        )) }
    </div>
);

export default withRouter (ListSearchView);