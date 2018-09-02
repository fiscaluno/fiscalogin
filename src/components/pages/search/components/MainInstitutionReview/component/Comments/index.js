import React from 'react';

const Comments = (props) = (
    <div id="commentsContainer">
        <p>"{this.props.pros}"</p>
        <div>
            <p>
                {this.props.career}
            </p>
            <p id>
                {this.props.city}/{this.props.state}
            </p>
        </div>
    </div>
);

export default Comments;