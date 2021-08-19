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
import BOFirstPage from './BO/BOFirstPage';
import RegisterBO from './admin/BO/RegisterBO';
import ShowTableBO from './admin/BO/ShowTableBO';
import Applicationform from "./Applicant/Applicationform";
import ViewPlanningConsent from "./Applicant/ViewPlanningConsent";
import RegisterBoard from './admin/Board/RegisterBoard';
import Viewapplication from './Applicant/Viewapplication';
import Getstarted from './Applicant/Getstarted';
import ShowTableBoard from './admin/Board/ShowTableBoard';
import EditBO from './admin/BO/EditBO';
import EditBoard from './admin/Board/EditBoard';
import ManageBureaus from './admin/Bureau/ManageBureaus';
import AddBureau from './admin/Bureau/AddBureau';
import ProfileBO from './BO/ProfileBO';
import BoPlaningConsent from './BO/BoPlaningConsent'
import EditBureau from './admin/Bureau/EditBureau';
import Thanksforsubmitingpc from './Applicant/Thanksforsubmitingpc';
import Submitcomplain from './Applicant/Submitcomplain';
import Complain from './Applicant/Complain';
import ApplicantRoute from './ApplicantRoute';
import BuildingOfficerRoute from './BuildingOfficerRoute';
import AdminRoute from './AdminRoute';
import Unauthorized from './Unauthorized';
import ShowComplain from './Applicant/complain/ShowComplain';
function Routes() {
    const role = localStorage.getItem("role");
    return (
        <>
            {/* <Header /> */}
            <Switch>
                <Route exact path="/" render={props => (
                    <Redirect to={{ pathname: '/login' }} />
                )} />
                {/* <Route path="/home" component={Home} /> */}

                {/* Admin Route */}

                <AdminRoute exact path="/admin" component={Firstpage} />
                <AdminRoute exact path="/admin/registerBO" component={RegisterBO} />
                <AdminRoute exact path="/admin/officer" component={ShowTableBO} />
                <AdminRoute exact path="/admin/edit/:id" component={EditBO} />

                <AdminRoute exact path="/admin/registerBoard" component={RegisterBoard} />
                <AdminRoute exact path="/admin/boards" component={ShowTableBoard} />
                <AdminRoute exact path="/admin/bordEdit/:id" component={EditBoard} />
                <AdminRoute exact path="/admin/manageBureau" component={ManageBureaus} />
                <AdminRoute exact path="/admin/bureauAdd" component={AddBureau} />
                <AdminRoute exact path="/admin/bureauEdit/:id" component={EditBureau} />)


                <ApplicantRoute exact path="/applicant" component={Fullpage} />
                <ApplicantRoute path="/applicant/apply" component={Startapplication} />
                <ApplicantRoute path="/applicant/complain" component={Submitcomplain} />
                <ApplicantRoute path="/applicant/getstarted" component={Getstarted} />
                <ApplicantRoute path="/applicant/success" component={Thanksforsubmitingpc} />
                <ApplicantRoute path="/applicant/application" component={Applicationform} />
                <ApplicantRoute exact path="/applicant/viewPc" component={ViewPlanningConsent} />
                <ApplicantRoute exact path="/applicant/viewComplain" component={ShowComplain}/>


                <ApplicantRoute path="/applicant/view" component={Viewapplication} />
                <ApplicantRoute exact path="/applicant/submitComplain/:id" component={Complain} />

                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />
                <Route path="/unauthorized" component={Unauthorized} />

                <BuildingOfficerRoute exact path="/bo/dashboard" component={BOFirstPage} />
                <BuildingOfficerRoute path="/profileBO" component={ProfileBO} />
                <BuildingOfficerRoute path="/bo/planingConsent" component={BoPlaningConsent} />
                {/*Redirect if not authenticated */}
                {/* <Guard path="/user" token="user-token" routeRedirect="/user/login" component={PrivateRoute} />  */}
            </Switch>
        </>
    );
}
export default Routes;