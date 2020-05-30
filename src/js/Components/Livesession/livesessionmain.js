import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../HomePage/Header'
import Footer from '../HomePage/Footer'
import './livesessionmain.css'
import Timer from 'react-compound-timer';
import Card from 'react-bootstrap/Card';
import image1 from '../Livesession/images/guitar.png';
import Productcarousel from "./productcarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from 'react-bootstrap/Container'
import { List, ListItem, ListItemText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import {green, blue} from '@material-ui/core/colors'
import Divider from '@material-ui/core/Divider';

function Livemain(){

    const[pname,setpname] = React.useState('Office Table');
    const[fimage,setfimage] = React.useState(image1);
    const[bidprice, setbidprice] = React.useState('5,000')
    const[enterprice, setenterprice] = React.useState('');
    const[highestbid] = React.useState('PKR 5,000');
    const[startprice] = React.useState('PKR 1,000');
    const[bidscount] = React.useState('12');  
    const[timer, settimer] = React.useState('3000');
    if(timer === 0){
      return alert("Session has ended!")
    }

    const ColorButton = withStyles(theme => ({
        root: {
          color: "#90EE90",
          backgroundColor: "#2C2E73",
          '&:hover': {
            backgroundColor: blue[700],
          },
        },
      }))(Button);
    return(
        <div>
            <Container className="container">
        <Header />
        <Row ><Col md = {12}>
         <h1 className="title">Live Auction for Product: {pname}</h1>
            </Col>
        </Row>
        <Row><Col>
            <h5>Time Left</h5>
            </Col>
        </Row>
        <Row className="timer">
             
            <Timer  
    initialTime={timer}
    direction="backward"
>        <Card className="cardview"> <h3 className = "timervalues" id="hours"><strong><Timer.Hours /></strong></h3></Card>
           <strong><h3 className="dots"> : </h3></strong>
           <Card className="cardview"> <h3 className = "timervalues" id="minutes"><strong><Timer.Minutes /></strong></h3></Card>
          <strong><h3 className="dots"> : </h3></strong>
           
           <Card className="cardview"><h3 className = "timervalues" id="seconds"><strong><Timer.Seconds /></strong></h3></Card>
          
            </Timer>
            
        </Row>
        <Row>
        
            <Col md = {8}>
        <Card className="productcard">
            <Productcarousel />
            </Card>

            </Col>
            <Col md = {4}>
            <Row>
                <Card className="cardbiddertitle">
                <strong><p className="livebiddertitle">Live Bidders List</p></strong>
                </Card>
            </Row>
                
            <List style={{
                
                maxHeight: "100%",
                overflow: "auto",

            }}
           >
                 <Divider /> 

                <Row>
                 <Col>
                   
                <ListItem>
                  <ListItemText
                    primary={'Bid Price:' + bidprice}
                  />
                </ListItem>
                </Col>
                <Col>
                    <p>hassan</p>
                </Col>
                </Row>
                <Divider /> 

                <Row>
                 <Col>
               
                <ListItem>
                  <ListItemText
                    primary={'Bid Price:' + bidprice}
                  />
                </ListItem>
                </Col>
                <Col>
                    <p>yaseen</p>
                </Col>
                </Row>
                <Divider /> 

                <Row>
                 <Col>
                <ListItem>
                  <ListItemText
                    primary={'Bid Price:' + bidprice}
                  />
                </ListItem>
                </Col>
                <Col>
                    <p>kamran</p>
                </Col>
                </Row>
                <Divider /> 

                <Row>
                 <Col>
                <ListItem>
                  <ListItemText
                    primary={'Bid Price:' + bidprice}
                  />
                </ListItem>
                </Col>
                <Col>
                    <p>umer</p>
                </Col>
                </Row>
                <Divider /> 

                <Row>
                 <Col>
                <ListItem>
                  <ListItemText
                    primary={'Bid Price:' + bidprice}
                  />
                </ListItem>
                </Col>
                <Col>
                    <p>ali</p>
                </Col>
                </Row>
                <Divider />
            </List>
        
            </Col>

        </Row>
        <Row>
            <Row>
            <Col>
            <Row>
                <h1 className="productdetailshead">Product Details:</h1>
                <p className="description">Wood Table in very good condition. Just buy and use</p>
                </Row>
            <Row>
            <TextField 
            id="outlined-basic" 
            label="Enter Bid Price" 
            variant="outlined" 
            value={enterprice}
            onChange={e => setenterprice(e.target.value)}
            style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "7%"
            }}
            ></TextField>

            </Row>
            <Row>
                <ColorButton size="Large" variant="contained" className="palcebidbtn"
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3%",
                    backgroundColor: '#549C9E',
                    color: 'white'
                }}
               
                >
                    Place Bid
                </ColorButton>
                </Row>    
            </Col>
            </Row>
            <Col>
            <Row>
                <h1 className="titles">
                    Highest Bid:
                </h1>
            </Row>
<Row>
<p className="biddescription">{highestbid}</p>

</Row>

            <Row>
            <h1 className="titles">
                Starting Price:
                </h1>
            </Row>
<Row>
<p className="biddescription">{startprice}</p>

</Row>

<Row>
            <h1 className="titles">
                Bids Count:
                </h1>
            </Row>
<Row>
<p className="biddescription">12</p>

</Row>

            </Col>
        </Row>

<Footer />
        </Container>

        </div>
    );

    }

export default Livemain;