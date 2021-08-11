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
import BOFirstPage from './BO/BOFirstPage' ;
import RegisterBO from './admin/BO/RegisterBO';
import ShowTableBO from './admin/BO/ShowTableBO';
import RegisterBoard from './admin/Board/RegisterBoard';
import Viewapplication from './Applicant/Viewapplication';
import Getstarted from './Applicant/Getstarted';
import ShowTableBoard from './admin/Board/ShowTableBoard';
import EditBO from './admin/BO/EditBO';
import EditBoard from './admin/Board/EditBoard';
import ManageBureaus from './admin/Bureau/ManageBureaus';
import AddBureau from './admin/Bureau/AddBureau';
import ProfileBO from './BO/ProfileBO';
import EditBureau from './admin/Bureau/EditBureau';
import Thanksforsubmitingpc from './Applicant/Thanksforsubmitingpc';
import Submitcomplain from './Applicant/Submitcomplain';
import Complain from './Applicant/Complain';
function Routes() {
    return (
        <>
            {/* <Header /> */}
            <Switch>
                <Route exact path="/" render={props => (
                    <Redirect to={{ pathname: '/login' }} />
                )} />
                {/* <Route path="/home" component={Home} /> */}

                {/* Admin Route */}
                <Route exact path="/admin" component={Firstpage} />     
                <Route exact path="/admin/registerBO" component={RegisterBO}/>
                <Route exact path="/admin/officer" component={ShowTableBO}/>
                <Route exact path="/admin/edit/:id" component={EditBO}/>

                <Route exact path="/admin/registerBoard" component={RegisterBoard}/>
                <Route exact path="/admin/boards" component={ShowTableBoard}/>
                <Route exact path="/admin/bordEdit/:id" component={EditBoard}/>
                <Route exact path="/admin/manageBureau" component={ManageBureaus}/>
                <Route exact path="/admin/bureauAdd" component={AddBureau}/>
                <Route exact path="/admin/bureauEdit/:id" component={EditBureau}/>

                <Route exact path="/applicant" component={Fullpage} />         
                <Route path="/applicant/apply" component={Startapplication} />
                <Route path="/applicant/complain" component={Submitcomplain} />
                <Route path="/applicant/getstarted" component={Getstarted} />
                <Route path="/applicant/success" component={Thanksforsubmitingpc} />
                
                <Route path="/applicant/view" component={Viewapplication} />
                <Route exact path="/applicant/submitComplain/:id" component={Complain}/>

                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />

                <Route exact path="/bo/dashboard" component={BOFirstPage}/>
                <Route path="/profileBO" component={ProfileBO}/>
                {/* <Route path="/user/login" component={Login} />
                {/* <Route path="/user/login" component={Login} />
                
                {/*Redirect if not authenticated */}
                {/* <Guard path="/user" token="user-token" routeRedirect="/user/login" component={PrivateRoute} />  */}
            </Switch>
        </>
    );
}
export default Routes;