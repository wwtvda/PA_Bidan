import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DashAdm from '../../container/layout/dashboard/Admin/dAdm'
import DashUsr from '../../container/layout/dashboard/User/dUsr'
import DashBdn from '../../container/layout/dashboard/Bidan/dBdn'
import Login from '../../assets/auth/login'
import SignUp from '../../assets/auth/signup'
import Signform from '../../assets/auth/signForm/sign1'


export default props => (
    <React.Fragment>
        <Router>
            <Switch>
            <Route exact path='/' component={ Login } />
            <Route exact path='/signUp' component={ SignUp } />
            <Route exact path='/signform' component={ Signform } />
            <Route exact path='/dashboard' component={ DashAdm } />
            <Route exact path='/dashboardUser' component={ DashUsr } />
            <Route exact path='/dashboardBidan' component={ DashBdn } />
            </Switch>
        </Router>
    </React.Fragment>
  )