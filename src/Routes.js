import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Home from "./components/pages/HomeComponent";
// import Login from "./components/pages/LoginComponent";
// import Register from "./components/pages/RegisterComponent";
// import PrivateRoute from './PrivateRoute';
// import { Guard } from './Guard';
// import Header from './components/layouts/Header';
import Dashboard from './Applicant/Dashboard'
import Login from './Auth/Login';
import Registration from './Auth/Registration';
function Routes() {
    return (
        <>
            {/* <Header /> */}
            <Switch>
                <Route exact path="/" render={props => (
                    <Redirect to={{ pathname: '/dashboard' }} />
                )} />
                {/* <Route path="/home" component={Home} /> */}
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                {/* <Route path="/user/register" component={Register} /> */}
                <Route path="/register" component={Registration} />
                {/* <Route path="/user/login" component={Login} />
                
                {/*Redirect if not authenticated */}
                {/* <Guard path="/user" token="user-token" routeRedirect="/user/login" component={PrivateRoute} />  */}
            </Switch>
        </>
    );
}
export default Routes;