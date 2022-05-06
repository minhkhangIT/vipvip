import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class TeamComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
                
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.addEmployee = this.addTeam.bind(this);
       
    }

   
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }


    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }
    addTeam(){
        this.props.history.push('/add-team');
    }

    render() {
        let idSum =  this.state.employees.length;
        return (
            <div>
                <div class="row">
                <div class="col-8"> 
                <h4 className="text-center float-left">Team </h4>
                </div>
                <div class="col-4">
                    <button className="btn btn-primary" onClick={this.addTeam}> Add Team</button>
               </div>
                </div>
                <hr/>
                
                <div className="row">
                        <div class="col-8">
                        <text>Total <span>{idSum}</span> team</text>
                        </div>
                        
                </div>

                <br></br>
                <text>Search result</text>
                <br></br>
                
                 
                 
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> No</th>  
                                    <th> Name Team</th>
                                    <th> Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.id} </td>   
                                             <td> {employee.team}</td>              
                                             <td>                                      
                                                 <button style={{marginLeft: "10px"}}  className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>

                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> No</th>
                                    <th> FullName</th>
                                    <th> Phone</th>
                                    <th> Address</th>
                                    <th> Sex</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                            <td> { employee.id} </td>
                                             <td> { employee.fullName} </td>   
                                             <td> {employee.phone}</td>
                                             <td> {employee.address}</td>
                                             <td> {employee.sex}</td>                               
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
            </div>
            
        )
    }
}

export default TeamComponent
