import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class WorkingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.props.history.push('/employees');
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
        
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    advanceEmployee(id){
        this.props.history.push(`/advance-employee/${id}`);
    }
    workingEmployee(id){
        this.props.history.push(`/working-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <div class="btn-group">
                <button className="btn btn-primary"  onClick={ () => this.viewEmployee(this.state.employee.id)}> Information</button>
                <button className="btn btn-primary active"  onClick={ () => this.workingEmployee(this.state.employee.id)}> Working</button>
                <button className="btn btn-primary"  onClick={ () => this.advanceEmployee(this.state.employee.id)}> Advance</button>
                </div>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                        <thead>
                                <tr>
                                    <th> ID</th>
                                    <th> Start Date</th>
                                    <th> Hour</th> 
                                    <th> Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    
                                        <tr>
                                             <td> {this.state.employee.id} </td>   
                                             <td> {this.state.employee.startDate}</td>
                                             <td> 8</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(this.state.employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(this.state.employee.id)} className="btn btn-danger">Delete </button>
                                                
                                             </td>
                                        </tr>
                                    
                                
                            </tbody>
                        </table>

                 </div>
            </div>
        )
    }
}

export default WorkingComponent
