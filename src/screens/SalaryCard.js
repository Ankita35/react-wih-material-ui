import React, { Component } from 'react';
import {Button, Header, Container, Input, Form,FormField, Table, Icon} from 'semantic-ui-react'
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
import '../css/salary-card.css';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true,company_edit:false,email_edit:false,mobile_edit:false,residential_edit:false,company_add_edit:false,bank_details:false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    changeMobileNumber = () => this.setState({mobile_edit: !this.state.mobile_edit});
    changeEmailId = () =>  this.setState({email_edit: !this.state.email_edit});
    changeCompanyName = () => this.setState({company_edit: !this.state.company_edit});
    changeResAddress = () => this.setState({residential_edit: !this.state.residential_edit});
    changeCompanyAddress = () => this.setState({company_add_edit: !this.state.company_add_edit});
    changeBankDetails = () => this.setState({bank_details: !this.state.bank_details});
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
                                title="Salary Card"
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
                       
                          <Grid centered columns={2} class="Salary-Card">
                                <Grid.Column>
                                <Image src='/assets/images/wireframe/image.png' />
                                </Grid.Column>
                            </Grid>

                            <Grid >
                                <Grid.Row columns={3}>
                                    <Grid.Column>
                                        <Card class="Profile-Card">
                                            <CardHeader
                                                backgroundColor={indigo900}
                                                avatar={profileImg}
                                                class="Profile-Picture"
                                                title="Profile Picture"
                                                titleColor={grey700}
                                                titleStyle={Cardtitles}
                                                subtitleColor={grey700}
                                                subtitleStyle={Cardsubtitles}
                                                subtitle="Upload new picture"

                                            >
                                           </CardHeader>
                                        </Card>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Card class="Profile-Card">
                                        <Grid.Row align="left">
                                            <Grid.Column>
                                            <span class="Contact-information">Contact information</span>
                                            </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                            <Grid.Column>
                                            <span class="email-id text-style-1"><Icon name="edit" color="teal" onClick={this.changeEmailId}></Icon>email id: a**********@gmail.com</span>
                                            </Grid.Column>
                                </Grid.Row>
                               {(this.state.email_edit)?(
                                   <Grid>
                                       <Grid.Row align="left">
                                <Grid.Column>
                                          <br />
                                        </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                            <span class="Enter-company-name">Enter new email id</span>
                                        </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                <Input focus />
                                        </Grid.Column>
                               </Grid.Row>
                               <Grid.Row align="left">
                                <Grid.Column>
                               <span class="confirm-div confirm-change">CONFIRM CHANGE</span> <span class="cancel-div confirm-change" onClick={this.changeEmailId}>CANCEL</span>
                                        </Grid.Column>
                               </Grid.Row>
                               </Grid>
                               ):(
                                    <p></p>
                               )}
                                
                                <Grid.Row align="left">
                                            <Grid.Column>
                                            <span class="contact-number text-style-1"><Icon name="edit" color="teal" onClick={this.changeMobileNumber}></Icon>contact number: +91-*****1194</span>
                                            </Grid.Column>
                                </Grid.Row>
                                {(this.state.mobile_edit)?(
                                    <Grid>
                                         <Grid.Row align="left">
                                <Grid.Column>
                                          <br />
                                        </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                            <span class="Enter-company-name">Enter new mobile number</span>
                                        </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                <Input focus />
                                        </Grid.Column>
                               </Grid.Row>
                               <Grid.Row align="left">
                                <Grid.Column>
                               <span class="confirm-div confirm-change">VERIFY NUMBER</span>
                               <span class="cancel-div confirm-change" onClick={this.changeMobileNumber}>CANCEL</span>
                                        </Grid.Column>
                               </Grid.Row>
                                    </Grid>
                                ):(
                                    <p></p>
                                )}
                               
                                        </Card>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Card class="Profile-Card">
                                        <Grid.Row align="left">
                                            <Grid.Column>
                                            <span class="Contact-information">Residential information</span>
                                            </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                            <Grid.Column>
                                            <span class="residential"><Icon name="edit" color="teal" onClick={this.changeResAddress}></Icon>106, Mathura Apartments,Old Airport Road,Domlur, Bangalore</span>
                                            </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                          <br />
                                        </Grid.Column>
                                </Grid.Row>
                                {(this.state.residential_edit)?(
                                    <Grid>
                                   <Grid.Row align="left">
                                <Grid.Column>
                                            <span class="Enter-company-name">Address first line</span>
                                        </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                <Input focus />
                                        </Grid.Column>
                               </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                            <span class="Enter-company-name">Address second line</span>
                                        </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                <Input focus />
                                        </Grid.Column>
                               </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                            <span class="Enter-company-name">City</span>
                                        </Grid.Column>
                                        </Grid.Row>
                                <Grid.Row align="left">
                                        <Grid.Column>
                                <Input focus />
                                        </Grid.Column>
                              </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                            <span class="Enter-company-name">Pin Number</span>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                <Input focus />
                                </Grid.Column>      
                               </Grid.Row>
                               <Grid.Row align="left">
                                <Grid.Column>
                               <span class="confirm-div confirm-change">CONFIRM CHANGE</span>
                               <span class="cancel-div confirm-change" onClick={this.changeResAddress}>CANCEL</span>
                                        </Grid.Column>
                               </Grid.Row>
                                    </Grid>
                                ):(
                                    <p></p>
                                )}
                              
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
                                        <Card class="Profile-Card">
                                        <Grid.Row align="left">
                                            <Grid.Column>
                                            <span class="Contact-information">Company name</span>
                                            </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                            <Grid.Column>
                                            <span class="residential"><Icon name="edit" color="teal" onClick={this.changeCompanyName}></Icon>MAGIKBOX MEDIA</span>
                                        </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                          <br />
                                        </Grid.Column>
                                </Grid.Row>
                                {(this.state.company_edit)?(
                                    <Grid>
                                  <Grid.Row align="left">
                                <Grid.Column>
                                            <span class="Enter-company-name">Enter company name</span>
                                        </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                <Input focus />
                                        </Grid.Column>
                               </Grid.Row>
                               <Grid.Row align="left">
                                <Grid.Column>
                               <span class="confirm-div confirm-change">CONFIRM CHANGE</span>
                               <span class="cancel-div confirm-change" onClick={this.changeCompanyName}>CANCEL</span>
                                        </Grid.Column>
                               </Grid.Row>
                                    </Grid>
                                ):(
                                    <p></p>
                                )}
                                
                                        </Card>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Card class="Profile-Card">
                                        <Grid.Row align="left">
                                            <Grid.Column>
                                            <span class="Contact-information">Company Address</span>
                                            </Grid.Column>
                                          </Grid.Row>
                                <Grid.Row align="left">
                                            <Grid.Column>
                                            <span class="residential"><Icon name="edit" color="teal" onClick={this.changeCompanyAddress}></Icon>106, Mathura Apartments,Old Airport Road,Domlur, Bangalore</span>
                                            </Grid.Column>
                                </Grid.Row>
                                {(this.state.company_add_edit)?(
                                    <Grid>
                                        <Grid.Row align="left">
                                        <Grid.Column>
                                      <br />
                                 </Grid.Column>
                                        </Grid.Row>
                                   <Grid.Row align="left">
                                <Grid.Column>
                                            <span class="Enter-company-name">Address first line</span>
                                        </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                <Input focus />
                                        </Grid.Column>
                               </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                            <span class="Enter-company-name">Address second line</span>
                                        </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                <Input focus />
                                        </Grid.Column>
                               </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                            <span class="Enter-company-name">City</span>
                                        </Grid.Column>
                                        </Grid.Row>
                                <Grid.Row align="left">
                                        <Grid.Column>
                                <Input focus />
                                        </Grid.Column>
                              </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                            <span class="Enter-company-name">Pin Number</span>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row align="left">
                                <Grid.Column>
                                <Input focus />
                                </Grid.Column>      
                               </Grid.Row>
                               <Grid.Row align="left">
                                <Grid.Column>
                               <span class="confirm-div confirm-change">CONFIRM CHANGE</span>
                               <span class="cancel-div confirm-change" onClick={this.changeCompanyAddress}>CANCEL</span>
                                        </Grid.Column>
                               </Grid.Row>
                                    </Grid>
                                ):(
                                    <p></p>
                                )}
                              
                                        </Card>
                                    </Grid.Column>
                                    <Grid.Column>
                                    <Card class="Profile-Card">
                                        <Grid.Row align="left">
                                            <Grid.Column>
                                            <span class="Contact-information">Bank Account</span>
                                            </Grid.Column>
                                          </Grid.Row>
                                <Grid.Row align="left">
                                            <Grid.Column>
                                            <span class="residential"><Icon name="edit" color="teal" onClick={this.changeBankDetails}></Icon>Bank Name: Axis bank,Account Number: 909023012381723,IFSC code; UBI0000552</span>
                                            </Grid.Column>
                                </Grid.Row>
                                {(this.state.bank_details)?(
                                    <Grid>
                                         <Grid.Row align="left">
                                        <Grid.Column>
                                      <br />
                                 </Grid.Column>
                                        </Grid.Row>
                                      <Grid.Row align="left">
                                      <Grid.Column>
                                      <span class="residential">You need to upload the new bank statements to change the details</span>
                                      </Grid.Column>
                          </Grid.Row>
                          <Grid.Row align="left">
                                <Grid.Column>
                               <span class="confirm-div confirm-change">UPLOAD NOW</span>
                               <span class="cancel-div confirm-change" onClick={this.changeBankDetails}>CANCEL</span>
                                        </Grid.Column>
                               </Grid.Row>
                               </Grid>
                                ):(<p></p>)}
                                        </Card>
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
export default Profile;