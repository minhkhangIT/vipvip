import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import ModalComponent from './ModalComponent';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
                
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        let idSum =  this.state.employees.length;    
        
        return (
            <div>
                <div class="row">
                <div class="col-8"> 
                <h4 className="text-center float-left">Employees </h4>
                </div>
                <div class="col-4"><button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                <ModalComponent/>
                <button style={{ marginLeft: "10px" }} className="btn btn-danger" > Delete Employee</button></div>
                </div>
                <hr/>
                
                <div className="row">
                        <div class="col-8">
                        <text>Total <span>{idSum}</span> employees</text>
                        </div>
                        <div class="col-4">
                        <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search employee by name" id="myInput" onkeyup="myFunction()" aria-label="Search"/> 
                        </form>
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
                                    <th> FullName</th>
                                    <th> Phone</th>
                                    <th> Team</th>
                                    <th> Option</th>
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
                                             <td> {employee.team}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
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

export default ListEmployeeComponent
