import React, { Component } from 'react';
import {Button, Header, Container, Input, Form,FormField, Table} from 'semantic-ui-react'
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
import cash from "../assets/cash.png"
import dueDate from "../assets/dueDate.png"
import dueAmount from "../assets/dueAmount.png"
import editProfile from "../assets/editProfile.png"
import education from "../assets/education.png"
import Loan from "../assets/Loan.png"
import Repayment from "../assets/Repayment.png"
import salaryCard from "../assets/salaryCard.png"
import shopping from "../assets/shopping.png"
import transaction from "../assets/transaction.png"
import outstanding from "../assets/watchOutstanding.png"
import profileImg from "../assets/profile.png"
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
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    handleToggle = () => this.setState({open: !this.state.open});
   componentWillMount(){

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
                                title="Dashboard"
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
                        <div className="container">
                          {/*  <span style={Cardtitles}>Limits</span>*/}
                        <Grid >
                            <Grid.Row columns={3}>
                                <Grid.Column>
                                    <Card class="cardStyle">
                                        <CardHeader
                                            backgroundColor={indigo900}
                                            avatar={cash}
                                            class="cardIcon"
                                            title="Cash"
                                            titleColor={grey700}
                                            titleStyle={Cardtitles}
                                            subtitleColor={grey700}
                                            subtitleStyle={Cardsubtitles}
                                            subtitle="Get instant cash in your account"

                                        >

                                            <RaisedButton className="cardButton" label="Upto ₹20000" primary={true}  />
                                        </CardHeader>

                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card class="cardStyle">
                                        <CardHeader
                                            backgroundColor={indigo900}
                                            avatar={education}
                                            class="cardIcon"
                                            title="Education"
                                            titleColor={grey700}
                                            titleStyle={Cardtitles}
                                            subtitleColor={grey700}
                                            subtitleStyle={Cardsubtitles}
                                            subtitle="Get instant cash in your account"

                                        >

                                            <RaisedButton className="cardButton" label="Upto ₹20000" primary={true}  />
                                        </CardHeader>

                                    </Card>
                            </Grid.Column>
                                <Grid.Column>
                                    <Card class="cardStyle">
                                        <CardHeader
                                            backgroundColor={indigo900}
                                            avatar={shopping}
                                            class="cardIcon"
                                            title="Shopping"
                                            titleColor={grey700}
                                            titleStyle={Cardtitles}
                                            subtitleColor={grey700}
                                            subtitleStyle={Cardsubtitles}
                                            subtitle="Get instant cash in your account"

                                        >

                                            <RaisedButton className="cardButton" label="Upto ₹20000" primary={true}  />
                                        </CardHeader>

                                    </Card>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid >
                                <Grid.Row columns={3}>
                                  <Grid.Column>
                                      <br />
                                 </Grid.Column>
                                 <Grid.Column>
                                      <br />
                                 </Grid.Column>
                                 <Grid.Column>
                                      <br />
                                 </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid >
                                <Grid.Row columns={3}>
                                    <Grid.Column>
                                        <Card class="dueStyle">
                                            <CardHeader
                                                backgroundColor={indigo900}>
                                                <Grid >
                                                <Grid.Row columns={3} style={nopadtop}>
                                                    <Grid.Column style={iconMid}>
                                                        <img style={duedate} src={dueDate}/>
                                                    </Grid.Column>
                                                    <Grid.Column>
                                                        <span style={dueText} > Due<br/>Date</span>
                                                    </Grid.Column>
                                                    <Grid.Column>
                                                        <RaisedButton className="duedateButton" label="17 March 2018"   primary={true}  />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                </Grid><br />
                                                <Divider style={{ margin: 10}} />
                                                <Grid >
                                                    <Grid.Row columns={3}>
                                                        <Grid.Column style={iconMid}>
                                                            <img style={duedate} src={dueAmount}/>
                                                        </Grid.Column>
                                                        <Grid.Column>
                                                           <span style={dueText}> Due<br/>Amount</span>
                                                        </Grid.Column>
                                                        <Grid.Column>
                                                            <RaisedButton className="dueButton" label="Upto ₹20000"   primary={true}  />
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </CardHeader>

                                        </Card>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Card class="cardStyle">
                                            <CardHeader
                                                backgroundColor={indigo900}
                                                avatar={outstanding}
                                                class="cardIcon"
                                                title="Current Outstanding"
                                                titleColor={grey700}
                                                titleStyle={Outtitles}


                                            ><cardText>
                                                <div>
                                                <RaisedButton className="cardButton" style={{marginTop:-60}} label="Upto ₹20000"   primary={true}  />
                                            </div>
                                                <div><RaisedButton className="cardButton" style={{marginTop:-20}} label="Repay Now"     /></div>

                                            </cardText>

                                            </CardHeader>

                                        </Card>
                                    </Grid.Column>
                                    <Grid.Column>

                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid >
                                <Grid.Row columns={3}>
                                  <Grid.Column>
                                      <br />
                                 </Grid.Column>
                                 <Grid.Column>
                                      <br />
                                 </Grid.Column>
                                 <Grid.Column>
                                      <br />
                                 </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid >
                                <Grid.Row columns={3}>
                                    <Grid.Column>

                                        <Card class="cardImp">
                                            <CardHeader
                                                backgroundColor={indigo900}
                                                avatar={Loan}
                                                class="cardImpicon"
                                                title="Loan"
                                                titleColor={grey700}
                                                titleStyle={Cardtitles}
                                                subtitleColor={grey700}
                                                subtitleStyle={Cardsubtitles}
                                                subtitle="Current running Loan Details"

                                            >

                                                <RaisedButton className="cardButton" label="View Now" primary={true}  />
                                            </CardHeader>
                                        </Card>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Card class="cardImp">
                                            <CardHeader
                                                backgroundColor={indigo900}
                                                avatar={salaryCard}
                                                class="cardImpicon"
                                                title="Salary Card"
                                                titleColor={grey700}
                                                titleStyle={Cardtitles}
                                                subtitleColor={grey700}
                                                subtitleStyle={Cardsubtitles}
                                                subtitle="Your Salary Card Details"

                                            >

                                                <RaisedButton className="cardButton" label="View Now" primary={true}  />
                                            </CardHeader>
                                        </Card>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Card class="cardImp">
                                            <CardHeader
                                                backgroundColor={indigo900}
                                                avatar={transaction}
                                                class="cardImpicon"
                                                title="Transactions"
                                                titleColor={grey700}
                                                titleStyle={Cardtitles}
                                                subtitleColor={grey700}
                                                subtitleStyle={Cardsubtitles}
                                                subtitle="Your Payment Details"

                                            >

                                                <RaisedButton className="cardButton" label="View Now" primary={true}  />
                                            </CardHeader>
                                        </Card>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid >
                                <Grid.Row columns={3}>
                                  <Grid.Column>
                                      <br />
                                 </Grid.Column>
                                 <Grid.Column>
                                      <br />
                                 </Grid.Column>
                                 <Grid.Column>
                                      <br />
                                 </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Grid >
                                <Grid.Row columns={3}>
                                    <Grid.Column>
                                        <Card class="cardImp">
                                            <CardHeader
                                                backgroundColor={indigo900}
                                                avatar={Repayment}
                                                class="cardImpicon"
                                                title="Repayment"
                                                titleColor={grey700}
                                                titleStyle={Cardtitles}
                                                subtitleColor={grey700}
                                                subtitleStyle={Cardsubtitles}
                                                subtitle="Your Loan History and Payments"

                                            >

                                                <RaisedButton className="cardButton" label="View Now" primary={true}  />
                                            </CardHeader>
                                        </Card>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Card class="cardImp">
                                            <CardHeader
                                                backgroundColor={indigo900}
                                                avatar={editProfile}
                                                class="cardImpicon"
                                                title="Edit Profile"
                                                titleColor={grey700}
                                                titleStyle={Cardtitles}
                                                subtitleColor={grey700}
                                                subtitleStyle={Cardsubtitles}
                                                subtitle="Your Profile Details"

                                            >

                                                <RaisedButton className="cardButton" label="View Now" primary={true}  />
                                            </CardHeader>
                                        </Card>
                                    </Grid.Column>
                                    <Grid.Column>

                                    </Grid.Column>
                                </Grid.Row>
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
export default Home;