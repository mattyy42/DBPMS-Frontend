import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Link } from 'react-router-dom'
export default class Thanksforsubmitingpc extends Component {
    render() {
        return (
                <div>
                    <Header/>
                    <Sidebar/>
        <div className="content-wrapper">
            <div className="content">           
             <div className="col-md">
            <div className="card bg-gradient-success">
                <div className="card-header">
                <h3 className="card-title">Successfuly Applied for plan consent you will get notifed shortly please check the portal regurally</h3>
               
                {/* /.card-tools */}
                </div>
            </div>
            </div>
            <div className="col text-center">
                   <Link exact to="../applicant">
                   <button type="button" className="btn btn-block btn-info btn-sm">Go to My Dashboard</button> 
                   </Link>
                                   </div>
            </div>

        </div></div>

        )
    }
}
