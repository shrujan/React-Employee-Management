import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import notFound from './NotFound';
import Employees from './Employees';
import EmployeeDetails from './EmployeeDetails';
import Home from './Home';
import Resume from './Resume';

import './CSS/Router.css'

const Router = () => {
    return (
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/not-found" exact component = { notFound }/>
                    <Route path="/employees" exact component = { Employees } />
                    <Route path="/employees/:id" exact component = { EmployeeDetails } />
                    <Route path='/employees/:id/Resume' exact component={Resume}></Route>
                </div>
    )
}

export default  Router;