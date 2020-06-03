import React from 'react';
import { Link } from 'react-router-dom';

const Back = (props) => {
    console.log(props)
    return (
        <span className="back">
            <Link to={props.link}> 
                {/* &larr;  */}
                { '<' }
            </Link>
        </span>
    )
}

export default Back;