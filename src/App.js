import React from 'react';
import './App.css';
import SignUp from './js/Components/Dashboards/SignUp';
import Login from './js/Components/Dashboards/LogIn';
import Home from './js/Components/Dashboards/sellerdashboardhome';
import Main from './js/Components/HomePage/main';
import Products from './js/Components/Dashboards/products';
import Loginadmin from './js/Components/Dashboards/admindashboard/loginadmin';
import Livemain from './js/Components/Livesession/livesessionmain'
import Approval from './js/Components/Dashboards/admindashboard/approval';
import Bidderhome from './js/Components/Dashboards/bidderdashboard/dashboardhome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/SignUp">
        <SignUp />
        </Route>
        <Route path="/LogIn">
        <Login />
        </Route>
        <Route path="/sellerdashboardhome">
        <Home />
        </Route>
        <Route path="/products">
        <Products />
        </Route>
        <Route path="/adminlogin">
        <Loginadmin />
        </Route>
        <Route path="/livesession">
        <Livemain />
        </Route>
        <Route path="/admindashboard/approval">
        <Approval />
        </Route>
        <Route path="/bidderdashboard">
        <Bidderhome />
        </Route>
        <Route path="/">
        <Main />
        </Route>
        
      </Switch>
 

    </Router>
    
  );
}

export default App;
