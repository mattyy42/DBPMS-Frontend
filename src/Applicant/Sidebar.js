import React, { Component } from 'react'

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Sidebar extends Component {
    render() {
        
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="index3.html" className="brand-link"><span className="brand-text font-weight-light">Addis Ababa  city Building <br></br> Permit Portal</span>
                    </a>
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Alexander Pierce</a>
                            </div>
                        </div>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item menu">
                                    <a  className="nav-link ">
                                        <i className="nav-icon fas fa-file" />
                                        <p>My Applications
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                    <Link to="/applicant/apply">
                                        <li className="nav-item">
                                            <a  className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Start Application</p>
                                            </a>
                                        </li>
</Link>                                  <Link to="/applicant/apply">       
                                        <li className="nav-item">
                                            <a  className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>View My application</p>
                                            </a>
                                        </li>
                                        </Link>
                                        <Link to="/applicant/apply">
                                        <li className="nav-item">
                                            <a className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Track My Applications</p>
                                            </a>
                                        </li></Link>

                                    </ul>
                                </li>

                                <li className="nav-item menu">
                                    <a  className="nav-link ">
                                        <i className="nav-icon fas fa-file" />
                                        <p>My Complain
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                    <Link to="/applicant/apply">
                                        <li className="nav-item">
                                            <a className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Submit Complain</p>
                                            </a>
                                        </li>
                                        </Link>
                                         <Link to="/applicant/apply">
                                        <li className="nav-item">
                                            <a  className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>View Complain</p>
                                            </a>
                                        </li>
                                        </Link>

                                    </ul>
                                </li>
                                
                                <li className="nav-item">
                                <Link to="/applicant/apply">
                                    <a className="nav-link">
                                        <i className="nav-icon fas fa-bell" />
                                        <p>
                                            Notification
                                            <span className="right badge badge-danger">New</span>
                                        </p>
                                    </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <a href="pages/gallery.html" className="nav-link">
                                        <i className="nav-icon far fa-user" />
                                        <p>
                                            Edit Profile
                                        </p>
                                    </a>
                                </li>



                            </ul>

                        </nav>
                    </div>




                </aside>
            </div>

        )
    }
}

export default withRouter(Sidebar); 