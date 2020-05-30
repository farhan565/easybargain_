import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from './signupstyle';
import CardMedia from '@material-ui/core/CardMedia';
import logo from './logo-new-header.png';
import {TextValidator} from 'react-material-ui-form-validator';
import { Route, Router, withRouter } from 'react-router-dom';
import Dashboard from './sellerdashboard';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { RadioGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';

//const styling = styles();

class Login extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      value: ""
    };
  }
  
  componentDidMount(){
    axios.get()
  }
  setValue = event => {
    this.setState({
      value: event.target.value
    });
  };

  setUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  setPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  check = () => {
    if(this.state.username === "abc" && this.state.password === "123" && this.state.value === "Bidder" ){
      return (alert("This is a Bidder") + this.nextPath("./main")); 
               
      }
    else if(this.state.username === "abc" && this.state.password === "123" && this.state.value === "Seller"){
      return (alert("This is a Seller") + this.nextPath("./sellerdashboardhome"));
    
    }else{
      return alert("Fields cannot be empty!");

    }
}

  render(){
    
  
    return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div>
          <a><CardMedia component="img" image={logo} /></a>
         
       <h5> <strong>
           Seller Log In
           </strong></h5>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="userName"
                  autoComplete="lname"
                  onChange={this.setUsername}
                  value={this.state.username}
  />
              </Grid>
             
                  
         
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.setPassword}
                  value={this.state.password}
  />
              </Grid>
              <Grid item xs={12}>
              <FormControl component="fieldset">
        <FormLabel component="legend">Choose User Type</FormLabel>
        <RadioGroup aria-label="Choose User Type"   name="auctiontype" value={this.state.value} onChange={this.setValue}>
          <FormControlLabel value="Bidder" control={<Radio />} label="Bidder" />
          <FormControlLabel value="Seller" control={<Radio />} label="Seller" />
          </RadioGroup>
          </FormControl>
  
            

              </Grid>
              <Grid item xs={12}>
            <Button
            type="submit"
            fullWidth
            variant="contained"

              onClick = {this.check}
              style = {{
                backgroundColor: '#075559',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#75EAE7',
      color: '#075559'
      
              },

              }}
              
            >
              Log In
            </Button>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/signup" variant="body2">
                  Create New Account
                </Link>
              </Grid>
            </Grid>
            </Grid>
         
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      
    );
  }
}  
    
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        EasyBargain
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default withRouter(Login);