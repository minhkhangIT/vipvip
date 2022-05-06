import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            age: '',
            sex: '',
            address: '',
            fullName: '',
            position: '',
            moneyPerHour: '',
            team: '',
            phone: '',
            startDate: '',
        }
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeSexHandler = this.changeSexHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePositionHandler = this.changePositionHandler.bind(this);
        this.changeMoneyPerHourHandler = this.changeMoneyPerHourHandler.bind(this);
        this.changeTeamHandler = this.changeTeamHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);   
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({fullName: employee.fullName,
                    age: employee.age,
                    sex : employee.sex,
                    address : employee.address,
                    position: employee.position,
                    moneyPerHour : employee.moneyPerHour,
                    team : employee.team,
                    phone: employee.phone,
                    startDate : employee.startDate

                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {fullName: this.state.fullName,
             age: this.state.age,
              sex: this.state.sex,
              address: this.state.address,
              position: this.state.position,
              moneyPerHour: this.state.moneyPerHour,
              team: this.state.team,
              phone: this.state.phone,
              startDate: this.state.startDate};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }
    changeFullNameHandler= (event) => {
        this.setState({fullName: event.target.value});
    }
    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }
    changeSexHandler= (event) => {
        this.setState({sex: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    
    changePositionHandler= (event) => {
        this.setState({position: event.target.value});
    }

    changeMoneyPerHourHandler= (event) => {
        this.setState({moneyPerHour: event.target.value});
    }

    changeTeamHandler= (event) => {
        this.setState({team: event.target.value});
    }
    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }
    changeStartDateHandler= (event) => {
        this.setState({startDate: event.target.value});
    }


    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Full Name: </label>
                                            <input placeholder="Full Name" name="fullName" className="form-control" 
                                                value={this.state.fullName} onChange={this.changeFullNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Sex: </label>
                                            <input placeholder="Sex" name="sex" className="form-control" 
                                                value={this.state.sex} onChange={this.changeSexHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Position: </label>
                                            <input placeholder="Position" name="position" className="form-control" 
                                                value={this.state.position} onChange={this.changePositionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Money Per Hour: </label>
                                            <input placeholder="Money Per Hour" name="moneyPerHour" className="form-control" 
                                                value={this.state.moneyPerHour} onChange={this.changeMoneyPerHourHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Team: </label>
                                            <input placeholder="Team" name="team" className="form-control" 
                                                value={this.state.team} onChange={this.changeTeamHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone: </label>
                                            <input placeholder="Phone" name="phone" className="form-control" 
                                                value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Start Date: </label>
                                            <input placeholder="Start Date" name="startDate" className="form-control" 
                                                value={this.state.startDate} onChange={this.changeStartDateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
