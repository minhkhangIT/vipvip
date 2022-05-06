import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    team(){
      this.props.history.push('/team');
  }
   employee(){
      this.props.history.push('/employees');
  }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light row">  
      
                <a class="navbar-brand col-10" href="/employees">Employee Manager</a>     
                <ul class="nav nav-tabs col-2" id="custom-tabs-one-tab" role="tablist">
                 
                  <li class="nav-item ">
                    <a class="nav-link " id="custom-tabs-one-messages-tab" data-toggle="pill" href="/employees" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false">Employee</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link " id="custom-tabs-one-settings-tab" data-toggle="pill" href="/team" role="tab" aria-controls="custom-tabs-one-settings" aria-selected="false">Team</a>
                  </li>
                </ul>       
                </nav> 
            </div>
        )
    }
}

export default HeaderComponent
