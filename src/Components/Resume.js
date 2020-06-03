import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/resume.css';
import Back from './Back'

import {fetchEmployeesResumeWithId } from '../API/fetchPeople';


class Resume extends Component  {
    

    constructor(props) {
        super(props)
        console.log(this.props.location.pathname);
        this.empId = (this.props.location.pathname).split('/')[2];

        this.state = {
            resume: {},
            name: ''
        }  
    }
    
    
    componentDidMount() {
        console.log('componeeee', this.empId)
        fetchEmployeesResumeWithId(this.empId).then((res) => {
            console.log(res);

            this.setState((prev) => {
                return {
                    ...prev,
                    resume: res.data,
                    name: res.name
                }
            })
        });
    }


    render() {
        return  (
            <div>
                 <div className="emp-header">
                    <Back link={'/employees/' + this.empId } />
                    Resume of { this.state.name }
                </div>
                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#Info">Info</a></li>
                        <li><a data-toggle="tab" href="#Project">Project</a></li>
                        <li><a data-toggle="tab" href="#Hobbies">Hobbies</a></li>
                        <li><a data-toggle="tab" href="#Notes">Notes</a></li>
                    </ul>

                    <div className="tab-content ">
                        <div id="Info" className="tab-pane fade in active">
                            <h5>Information of {this.state.name}</h5>
                            <hr/>
                            <p className="detailsDiv"> {this.state.resume.info} </p>
                        </div>
                        <div id="Project" className="tab-pane fade">
                            <h5>Projects of {this.state.name} </h5>
                            <hr/>
                            <p className="detailsDiv"> { this.state.resume.projects}</p>
                        </div>
                        <div id="Hobbies" className="tab-pane fade">
                            <h5>Hobbies of {this.state.name}</h5>
                            <hr/>
                            <p className="detailsDiv"> { this.state.resume.hobbies}</p>
                        </div>
                        <div id="Notes" className="tab-pane fade">
                            <h5>Notes of {this.state.name}</h5>
                            <hr/>
                            <p className="detailsDiv"> { this.state.resume.notes} </p>
                        </div>
                    </div>

                    
            </div>
        )
    }
    
}

export default Resume;