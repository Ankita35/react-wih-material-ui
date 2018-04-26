import React, { Component } from 'react';
import {Button, Header, Container, Input, Form,FormField, Table, Label, Divider,Accordion, Icon} from 'semantic-ui-react'
import App from "../App";
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
import installment from "../assets/installments.png"
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
import '../css/loanStyle.css';
import '../css/closedloan.css';
class ClosedLoans extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true,activeIndex: 0};
    }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  console.log('INDDEXX'+newIndex);
      this.setState({ activeIndex: newIndex })
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
        const loanRow={
            paddingBottom:0
        }
      
        return(

            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div className="App">
                    <div>
                        <p class="ActiveLoans">Closed Loans</p>
                        <div className="container">
                        <Grid >
                            <Grid.Row columns={3}>
                                <Grid.Column>
                                   <Card class="Rectangle-12">
                                                <Grid>
                                                <Grid.Row columns={3}>
                                                    <Grid.Column>
                                                       </Grid.Column>
                                                       <Grid.Column>
                                                       </Grid.Column>
                                                    <Grid.Column align="right">
                                                        <div class="Rectangle-2-copy-5">
                                                            <p class="ACTIVE">CLOSED</p>
                                                        </div>
                                                    </Grid.Column>
                                                 </Grid.Row>
                                                 <Grid.Row columns={1} align="left">
                                                 <Grid.Column>
                                                 <span class="loan-id">#264774364</span>
                                                  </Grid.Column>
                                                </Grid.Row>
                                               <Grid.Row columns={1} align="left">
                                                 <Grid.Column>
                                                         <span class="Disbursement-date">Disbursement date: 12 Nov 2018</span>
                                                         </Grid.Column>
                                                </Grid.Row>
                                                {(this.state.activeIndex === 1)?(
                                                    <Grid>
                                                         <Grid.Row>
                                                             <Grid.Column>
                                                                 <br />
                                                                 </Grid.Column>
                                                         </Grid.Row>
                                                            <Grid.Row columns={3} align="left">
                                                             <Grid.Column width={3}>
                                                                    <img src={dueAmount} alt="money" class="Vector-Smart-Object" />
                                                                     </Grid.Column>
                                                                     <Grid.Column width={7} align="left">
                                                                         <span class="Loan-Amount">Loan amount</span>
                                                                         </Grid.Column>
                                                                         <Grid.Column width={4} align="right">
                                                                         <span class="layer">₹35000</span>
                                                                         </Grid.Column>
                                                                            
                                                            </Grid.Row>
                                                            <Grid.Row columns={3} align="left">
                                                             <Grid.Column width={3}>
                                                                    <img src={dueAmount} alt="money" class="Vector-Smart-Object" />
                                                                     </Grid.Column>
                                                                     <Grid.Column width={7} align="left">
                                                                         <span class="Loan-Amount">Amount Repaid</span>
                                                                         </Grid.Column>
                                                                         <Grid.Column width={4} align="right">
                                                                         <span class="layer">₹35000</span>
                                                                         </Grid.Column>
                                                                            
                                                            </Grid.Row>
                                                            <Grid.Row columns={3} align="left">
                                                             <Grid.Column width={3}>
                                                                    <img src={dueDate} alt="date" class="Vector-Smart-Object" />
                                                                     </Grid.Column>
                                                                     <Grid.Column width={7} align="left">
                                                                         <span class="Loan-Amount">Last Payment</span>
                                                                         </Grid.Column>
                                                                         <Grid.Column width={4} align="right">
                                                                         <span><Label color='yellow' horizontal>4 Dec 2018</Label></span>
                                                                         </Grid.Column>
                                                                            
                                                            </Grid.Row>
                                                            <Grid.Row columns={3} align="left">
                                                             <Grid.Column width={3}>
                                                                    <img src={installment} alt="date" class="Vector-Smart-Object" />
                                                                     </Grid.Column>
                                                                     <Grid.Column width={7} align="left">
                                                                         <span class="Loan-Amount">No of installments</span>
                                                                         </Grid.Column>
                                                                         <Grid.Column width={4} align="right">
                                                                         <span>  <Label color='teal' horizontal>4</Label></span>
                                                                         </Grid.Column>
                                                                            
                                                            </Grid.Row>
                                                            <Grid.Row columns={3} align="left">
                                                             <Grid.Column width={3}>
                                                                    <img src={outstanding} alt="date" class="Vector-Smart-Object" />
                                                                     </Grid.Column>
                                                                     <Grid.Column width={7} align="left">
                                                                         <span class="Current-Outstanding">Current Outstanding</span>
                                                                         </Grid.Column>
                                                                         <Grid.Column width={4} align="right">
                                                                         <span> <Label className="Rectangle-2-copy-15 outstanding-amt text-style-1" horizontal >₹9000</Label></span>
                                                                         </Grid.Column>
                                                                            
                                                            </Grid.Row>
                                                            <Grid.Row columns={3} align="left">
                                                             <Grid.Column width={3}>
                                                                    <img src={dueAmount} alt="amount" class="Vector-Smart-Object" />
                                                                     </Grid.Column>
                                                                     <Grid.Column width={7} align="left">
                                                                         <span class="Processing-Fee">Processing Fee</span>
                                                                         </Grid.Column>
                                                                         <Grid.Column width={4} align="right">
                                                                         <span className="Processing-Fee-text">₹200</span>
                                                                         </Grid.Column>
                                                                            
                                                            </Grid.Row>
                                                            <Grid.Row columns={3} align="left">
                                                             <Grid.Column width={3}>
                                                                    <img src={dueAmount} alt="date" class="Vector-Smart-Object" />
                                                                     </Grid.Column>
                                                                     <Grid.Column width={7} align="left">
                                                                         <span class="GST">GST</span>
                                                                         </Grid.Column>
                                                                         <Grid.Column width={4} align="right">
                                                                         <span className="Processing-Fee-text">₹132</span>
                                                                         </Grid.Column>
                                                             </Grid.Row>
                                                             </Grid>
                                                ):(
                                                    <p></p>
                                                )}
                                                <Grid.Row>
                                                    <Grid.Column>
                                                <Divider />
                                                </Grid.Column>
                                                 </Grid.Row>
                                                 <Grid.Row align="center">
                                                 <Grid.Column>
                                                    <Accordion>
                                                 <Accordion.Title active={this.state.activeIndex === 1} index={1} 
            active onClick={this.handleClick}>  <Icon name='chevron down' color='teal'></Icon></Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 1}>
      <p></p>
        </Accordion.Content></Accordion>
                                                 </Grid.Column>
                                                 </Grid.Row>
                                                </Grid>
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
export default ClosedLoans;