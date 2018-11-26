import React from 'react';

import './style.css';

const Comments = (props) => (
    <div className="commentContainer">
        { props.data[0].map(object => (
            <p>asd</p>
        )) }
    </div>
);


export default Comments;