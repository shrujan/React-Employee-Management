import React, { useDebugValue, Fragment } from 'react';
import Back from './Back'

const notFound = () => {


    return (
        <Fragment>
            <div className="emp-header">
                <Back link="/" />
                Woops ... Something went Wrong
            </div>
            <div className="not-found">  
                <h1>404 Not Found</h1>
            </div>

        </Fragment>
        
    )
}

export default notFound;