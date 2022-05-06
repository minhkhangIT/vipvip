import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import WorkingComponent from './components/WorkingComponent';
import AdvanceComponent from './components/AdvanceComponent';
import TeamComponent from './components/TeamComponent';
import CreateTeamComponent from './components/CreateTeamComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/working-employee/:id" component = {WorkingComponent}></Route>
                          <Route path = "/advance-employee/:id" component = {AdvanceComponent}></Route>
                          <Route path = "/team" component = {TeamComponent}></Route>
                          <Route path = "/add-team" component = {CreateTeamComponent}></Route>
                    </Switch>
                </div>
             
        </Router>
    </div>
    
  );
}

export default App;
