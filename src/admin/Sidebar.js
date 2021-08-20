import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: "",
            phone_number: "",
        }
    }
    componentDidMount() {
        const tokenString = localStorage.getItem('token');
        axios
            .get("http://localhost:8000/api/user",
                { headers: { authorization: `Bearer ${tokenString}` } })
            .then((response) => {
                if (response.massage === "unauthenticated") {

                }
                this.setState({

                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    // building_officer: response.data.buildingOfficer,
                })

            })

    }
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
                                <img src="../dist/img/user2-160x160.jpg" className="img-circle elevation-2" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">{this.state.first_name} {this.state.last_name}</a>
                            </div>
                        </div>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item menu">
                                    <a className="nav-link ">
                                        <i className="nav-icon fas fa-file" />
                                        <p>Board of Appliance
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <Link to="/admin/registerBoard">
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Add Board of appliance</p>
                                                </a>
                                            </li>
                                        </Link>
                                        <Link to="/admin/boards">
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Manage Board of appliance</p>
                                                </a>
                                            </li>
                                        </Link>
                                        {/* <Link to="/applicant/apply">
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Manage boards</p>
                                                </a>
                                            </li>
                                        </Link> */}

                                    </ul>
                                </li>

                                <li className="nav-item menu">
                                    <a className="nav-link ">
                                        <i className="nav-icon fas fa-file" />
                                        <p>Building Officer
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <Link to="/admin/registerBO">
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Add Building Officer</p>
                                                </a>
                                            </li>
                                        </Link>
                                        <Link to="/admin/officer">
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Manage Accounts</p>
                                                </a>
                                            </li>
                                        </Link>


                                    </ul>
                                </li>
                                <li className="nav-item menu">
                                    <a className="nav-link ">
                                        <i className="nav-icon fas fa-file" />
                                        <p>Bureaus
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <Link to="/admin/manageBureau">
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Manage Bureaus</p>
                                                </a>
                                            </li>
                                        </Link>


                                    </ul>
                                </li>
                                {/* <li className="nav-item menu">
                                    <a className="nav-link ">
                                        <i className="nav-icon fas fa-file" />
                                        <p>Manage Portal
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <Link to="">
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Add Building Officer</p>
                                                </a>
                                            </li>
                                        </Link>
                                        <Link to="/applicant/apply">
                                            <li className="nav-item">
                                                <a className="nav-link">
                                                    <i className="far fa-circle nav-icon" />
                                                    <p>Manage Accounts</p>
                                                </a>
                                            </li>
                                        </Link>


                                    </ul>
                                </li> */}



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