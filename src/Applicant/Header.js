import React, { Component } from 'react'
import axios from "axios";
import { withRouter } from "react-router-dom";
class Header extends Component {
    handleLogout = (e) => {
        e.preventDefault();
        axios.get('http://127.0.0.1:8000/api/logout')
            .then((response) => {
                console.log(response.data.success);
                if (response.status === 200 && response.data.success === false) {
                    localStorage.removeItem("isLoggedIn");
                    this.props.history.push('/login');
                }
            });

    };
    render() {


        return (
            <div>
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#navlink" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></a>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                       
                        <li className="nav-item">

                            <div className="navbar-search-block">
                                <form className="form-inline">
                                    <div className="input-group input-group-sm">
                                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-navbar" type="submit">
                                                <i className="fas fa-search" />
                                            </button>
                                            <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                                <i className="fas fa-times" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        {/* Messages Dropdown Menu */}
                        
                        {/* Notifications Dropdown Menu */}
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#button" role="button" type="submit" onClick={this.handleLogout}>
                                <i className="fas fa-sign-out-alt" />
                            </a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#another" role="button">
                                <i className="fas fa-th-large" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}

export default withRouter(Header);