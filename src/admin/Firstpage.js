import React, { Component } from 'react'
import Dashboard from './../Applicant/Dashboard'
import Sidebar from './Sidebar'
import Header from './../Applicant/Header'
class Firstpage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <Dashboard />
            </div>
        )
    }
}
export default Firstpage;
