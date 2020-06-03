import React, { Component } from 'react';
import {fetchEmployees } from '../API/fetchPeople';
import { Link } from 'react-router-dom';
import './CSS/employee.css';
import Back from './Back'

class Employees extends Component {


    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            filter: '',
            sorted: "desc"
        }


        this.employeeDetails = this.employeeDetails.bind(this)
    }

    componentDidMount() {
        // make API call here
        fetchEmployees().then((res) => {
            // console.log(JSON.parse( res.data));

            this.setState((prevState) => {
                return {
                    ...prevState,
                    employees:  res.data['employees-list']
                }
            });

            console.log(this.state.employees)
        });

      
    }

    employeeDetails(id) {
        let empList = [ ...this.state.employees];
        for (let i = 0; i < empList.length; i ++) {
            if (empList[i] === id) {
                return empList[i];
            }
        }
    }

    displayEmployees(employees) {
        console.log(employees);
        if (employees !== undefined && employees.length > 0) {
            let empMap = employees.map((emp) => {
                return (
                    <div className="employees" key={emp.id} >
                        <Link to={ 
                            {
                                pathname: `/employees/` + emp.id,  
                                employeeDetails: emp,
                                employeeFn: this.detailsFn
                            }
                        } >{emp.firstName + ' ' + emp.lastName} </Link>
                        <span className="caret-sign"> > </span>
                    </div>
                )
            })
        
            return empMap;
        }
    }


    filterEmployees = (event) => {
        console.log(event.target.value);
        this.setState({
            ...this.state,
            filter: event.target.value
        })
    }

    sortEmployees(e) { 
        console.log('sdf')
        console.log("sorting based on the employee ID")
       let newList2 = [];
       let sort;
       if(this.state.sorted === "desc"){
           newList2 = this.state.employees.sort((a, b) => {
                return a.id - b.id;
            })
            sort = "asc";
       }else{
            newList2 = this.state.employees.sort((a, b) => {
                return b.id - a.id;
            })
            sort = "desc"
       }

        this.setState({
            employees: newList2,
            sorted : sort
        });
    }

    render(){
        let filteredEmp = this.state.employees;

        if(this.state.filter !== '' && this.state.filter !== undefined) {

            filteredEmp = filteredEmp.filter((emp) => {
                console.log(emp.firstName.toLowerCase());
                let firstName = emp.firstName.toLowerCase();
                let lastName = emp.lastName.toLowerCase();

                if (firstName.includes(this.state.filter) || 
                    lastName.includes(this.state.filter)) {
                    return emp
                }
            })
        }

        return (
            
            <div className='employeeList'>
                <div className="emp-header">
                    <Back link="/" />
                    Employee List
                </div>
                <div className="emp-container">
                    <div className="emp-list">
                        List of all the Employees
                        <span className="filter hide">
                            <button className="sorted" onClick={this.sortEmployees.bind(this)}> Sort By Id</button>
                            <input type="text" className="filter-text" name="filter" onChange={this.filterEmployees.bind(this)} />
                        </span>
                       
                    </div>
                    
                    {/* {this.state.employees} */}
                    {

                        this.displayEmployees( filteredEmp )   
                    
                    }
                </div>
                
            </div>
        )
    }
   

}



export default Employees;