import React, { Component } from 'react';
import { Header, Container, Input, Form,FormField, Table, Icon} from 'semantic-ui-react'
import App from "../App";
import Divider from 'material-ui/Divider';
import {Link, Redirect} from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Inventory from './Inventory'
import '../css/custom.css';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import esLogo from "../assets/es.png"
import profileImg from "../assets/profile.png"
import ProfileActual from "../assets/editProfile.png"
import IconMenu from 'material-ui/IconMenu';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import { Grid, Image } from 'semantic-ui-react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,grey700

} from 'material-ui/styles/colors';

import { DatePicker } from 'antd';
import moment from 'moment';
import '../css/transaction.css';
import MUIDataTable from "mui-datatables";

const columns = ["Transaction Date", "Transaction Details", "Debit", "Credit","Closing Bal"];

const data = [
 ["28-03-2018", "Loan disb: Cash Transfer to HDFC", "₹8000.00", "",""],
 ["28-03-2018", "Processing Fees", "₹600.00", "","₹0.00"],
];

const options = {};

const RangePicker = DatePicker.RangePicker;

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
    }

     componentWillMount(){

   }
    onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }
  
    render(){

       const sidebar={
            backgroundColor:'red'
        }
        const logo = {
            margin:'10px 0px 15px 0px',
            width: 200,

        };
       const profileName={
           color:'white',
           fontSize:20,
       }
        const userImg={
            height:'80px',
            width:'85px',
        }
        const menuStyle={
           fontSize:16,
            color:'white',
            textAlign:'left',
            marginLeft:'100',


        }
        const cardIcons={
           backgroundColor:'white'
        }
        const header={
           backgroundColor:'white'
        }
        const Cardtitles={
           fontFamily: 'Quicksand',
        }
        const Outtitles={
            fontFamily: 'Quicksand',
            fontSize:14,
        }
        const Cardsubtitles={
           fontSize:10,
            fontFamily:'Montserrat',
        }
        const duedate={
           width:30,
            fontFamily: 'Quicksand',
        }
        const iconMid={
           textAlign:'center'
        }
        const dueText={
           fontSize:14
        }
        const nopadtop={
           paddingTop:0
        }
        
        return(

            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div className="App">
                <div style={sidebar}>

                    <Drawer containerClassName="side"  open={this.state.open}>
                        <div>
                            <img style={logo} src={esLogo} alt="..." /></div>
                        <div>
                            <p style={profileName}>Welcome Priya !</p>
                            <img className="ui avatar image"   src={profileImg} style={userImg}/>
                        </div>
                        <div class="main-menu">
                       {/* <MenuItem leftIcon={<MapsPlace />}*/}
                        <MenuItem  className="menus" style={menuStyle}>Dashboard</MenuItem>
                        <MenuItem className="menus" style={menuStyle}>My Loans</MenuItem>
                        <MenuItem className="menus" style={menuStyle}>Salary Cards</MenuItem>
                        <MenuItem className="menus" style={menuStyle}>View Transactions</MenuItem>
                        <MenuItem className="menus" style={menuStyle}>View Repayments</MenuItem>
                        <MenuItem className="menus" style={menuStyle}>Edit Profiles</MenuItem>
                    </div>
                        <RaisedButton className="repay" label="Repay Now"   />
                    </Drawer>
                </div>

                    <div className="header">
                        <AppBar style={header}
                                title="My Transactions"
                                titleStyle={{color:'black',textAlign:'left'}}
                                iconClassNameRight="muidocs-icon-navigation-expand-more"
                                iconStyleRight={{color:'black'}}

                        >
                            <IconButton tooltip="SVG Icon">
                                <ActionHome />
                            </IconButton>
                          {/*  <RaisedButton
                                label="Toggle Drawer"
                                onClick={this.handleToggle}
                            />*/}
                        </AppBar>
                        <div className="container transactions-block">
                        <Grid align="left">
                            <Grid.Row>
                                <Grid.Column>
                                <RangePicker
      ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
      onChange={this.onChange}
    />
    <span class="transaction Download-PDF">Download PDF</span>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                <Grid.Column>
                                    <br />
                                    </Grid.Column>  </Grid.Row>
                                <Grid.Row>
                                <Grid.Column>
                                <MUIDataTable 
  title={"Employee List"} 
  data={data} 
  columns={columns} 
  options={options} 
/>
                                </Grid.Column>      </Grid.Row>
                            </Grid>
                      
               </div>
                        </div>
                <div>



             {/*   <Link to={{pathname:'/Inventory'}} >Inventory</Link>*/}
            </div>


            </div>
            </MuiThemeProvider>
        )
    }

}
export default Transactions;