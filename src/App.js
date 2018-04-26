import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './screens/Inventory'
import Home from './screens/Home'
import Loans from './screens/Loans'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Button, Header, Container, Divider, Input, Form,FormField, Table} from 'semantic-ui-react'
import Profile from './screens/editProfile'
import Transactions from './screens/Transactions'
import SalaryCard from './screens/SalaryCard'
class App extends Component {

  render() {
    return (
        <Router>
            <div className="App">
            <Route exact path="/" component={Home}/>
                <Route path="/Inventory" component={Inventory}/>
                <Route path="/Loans" component={Loans} />
                <Route path="/profile" component={Profile} />
                <Route path="/transactions" component={Transactions} />
                <Route path="/salaryCard" component={SalaryCard} />
            </div>
        </Router>

    );
  }
}

export default App;
