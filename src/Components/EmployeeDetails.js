import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {fetchEmployeesDetailsWithId } from '../API/fetchPeople';
import Back from './Back';



class EmployeeDetails extends Component  {
    

    constructor(props) {
        super(props)
        console.log(this.props.location.pathname);
        this.empId = (this.props.location.pathname).split('/')[2];

        this.state = {
            empDetails: []
        }  
    }
    
    
    componentDidMount() {
        console.log('componeeee', this.empId)
        fetchEmployeesDetailsWithId(this.empId).then((res) => {
            console.log(res);

            this.setState((prev) => {
                return {
                    ...prev,
                    empDetails: res
                }
            })
        });
    }

    
    render() {
        return  (
            <div className="employeeDetails-container">  
                <div className="emp-header">
                    <Back link="/employees" />
                   <span> Employee Detals of {this.state.empDetails.firstName} {this.state.empDetails.lastName} </span> 
                
                </div>
                
                <div className="empDetails-id-container">
                    <div className="employee-id">
                        <span>Employee Id: { this.state.empDetails.id}</span>
                    </div>
                    <div className="resume-flip">
                        <Link to={'/employees/' + this.state.empDetails.id + '/resume'}>Filp to Resume</Link>
                    </div>
                </div>

                <div className="employeeDetails">
                    <div className="hide">
                        <img id="empPhoto" src={this.state.empDetails.photo} style={{width:'10%'}}/>
                    </div>
                    <div>
                        <div className="label1" >First Name</div>
                        <div className="emp-details">{this.state.empDetails.firstName}</div>
                    </div>
                    <div>
                        <div className="label1">Last Name</div>
                        <div className="emp-details">{this.state.empDetails.lastName}</div>
                    </div>
                    <div>
                        <div className="label1">Address</div>
                        <div className="emp-details">{this.state.empDetails.address}</div>
                    </div>
                    <div>
                        <div className="label1">City</div>
                        <div className="emp-details">{this.state.empDetails.city}</div>
                    </div>
                    <div>
                        <div className="label1">Phone</div>
                        <div className="emp-details">{this.state.empDetails.phone}</div>
                    </div>
                    <div>
                        <div className="label1">Country</div>
                        <div className="emp-details">{this.state.empDetails.country}</div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default EmployeeDetails;