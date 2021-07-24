import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Startapplication from './Applicant/Startapplication';
// import Home from "./components/pages/HomeComponent";
// import Login from "./components/pages/LoginComponent";
// import Register from "./components/pages/RegisterComponent";
// import PrivateRoute from './PrivateRoute';
// import { Guard } from './Guard';
// import Header from './components/layouts/Header';
// import Dashboard from './Applicant/Dashboard'
import Fullpage from './Applicant/Fullpage';
import Login from './Auth/Login';
import Registration from './Auth/Registration';
import Firstpage from './admin/Firstpage';
import RegisterBO from './admin/BO/RegisterBO';
import RegisterBoard from './admin/Board/RegisterBoard';
function Routes() {
    return (
        <>
            {/* <Header /> */}
            <Switch>
                <Route exact path="/" render={props => (
                    <Redirect to={{ pathname: '/applicant' }} />
                )} />
                {/* <Route path="/home" component={Home} /> */}

                {/* Admin Route */}
                <Route exact path="/admin" component={Firstpage} />     
                <Route exact path="/admin/registerBO" component={RegisterBO}/>

                <Route exact path="/admin/registerBoard" component={RegisterBoard}/>




                <Route exact path="/applicant" component={Fullpage} />         
                <Route path="/applicant/apply" component={Startapplication} />
                <Route path="/login" component={Login} />

                <Route path="/register" component={Registration} />
                {/* <Route path="/user/login" component={Login} />
                {/* <Route path="/user/login" component={Login} />
                
                {/*Redirect if not authenticated */}
                {/* <Guard path="/user" token="user-token" routeRedirect="/user/login" component={PrivateRoute} />  */}
            </Switch>
        </>
    );
}
export default Routes;