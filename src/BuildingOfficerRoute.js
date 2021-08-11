import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const BuildingOfficerRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            props => {
                const login = localStorage.getItem("isLoggedIn");
                const role = localStorage.getItem("role");
                if (login) {
                    if (role === "BO") {
                        return <Component {...props} />;
                    }

                }
                return <Redirect to="/unauthorized" />
            }
        } />
    )
}

export default BuildingOfficerRoute;