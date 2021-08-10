import React, { Component } from 'react'
import Dashboard from './Dashboard'
import SideBar from './SideBar'
import Header from '../Applicant/Header'
class BOFirstpage extends Component {
    render() {
        return (
            <div>
                <Header />
                <SideBar />
                <Dashboard />
            </div>
        )
    }
}
export default BOFirstpage;
