import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateTeamComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
           
            team: '',
            
        }
      
        this.changeTeamHandler = this.changeTeamHandler.bind(this);
       
    }

    // step 3
   
   
    

    changeTeamHandler= (event) => {
        this.setState({team: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Team</h3>
        }else{
            return <h3 className="text-center">Update Team</h3>
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
                                            <label> Team: </label>
                                            <input placeholder="Team" name="team" className="form-control" 
                                                value={this.state.team} onChange={this.changeTeamHandler}/>
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

export default CreateTeamComponent
