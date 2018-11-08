import React from 'react';
import './style.css';

const ListSearchView = ({ data }) => (
    <div>
        { data.map(object => (
            <div key={object.institution_id}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1WPERa8TRyNp157Gf6jQXHU4T3_fx1COHuyC3FHOWm6b3thR" />
            </div>
        )) }
    </div>
);

export default ListSearchView;