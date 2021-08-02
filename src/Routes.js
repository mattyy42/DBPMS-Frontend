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
import ShowTableBO from './admin/BO/ShowTableBO';
import RegisterBoard from './admin/Board/RegisterBoard';
import Viewapplication from './Applicant/Viewapplication';
<<<<<<< HEAD
import Getstarted from './Applicant/Getstarted';
=======
import ShowTableBoard from './admin/Board/ShowTableBoard';
import EditBO from './admin/BO/EditBO';
>>>>>>> fcecbd06d84045ad0237d0adeb762077a37bc13a
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
                <Route exact path="/admin/officer" component={ShowTableBO}/>
                <Route exact path="/admin/registerBoard" component={RegisterBoard}/>
                <Route exact path="/admin/boards" component={ShowTableBoard}/>
                <Route exact path="/admin/edit/:id" component={EditBO}/>

                <Route exact path="/applicant" component={Fullpage} />         
                <Route path="/applicant/apply" component={Startapplication} />
                <Route path="/applicant/getstarted" component={Getstarted} />
                <Route path="/applicant/view" component={Viewapplication} />
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