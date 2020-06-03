import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="header-home">
                <span className="home">Home</span>
            </div>
            <ul className="browser-link">
                <li>
                    <Link to='/not-found' >Display Not Found</Link>
                    <Link to='/employees' >Show Employee List</Link>
                </li>
            </ul>
        </div>
        
    )
}


export default Home