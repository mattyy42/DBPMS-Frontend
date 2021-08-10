import React, { Component } from 'react';
import { Link, Navlink } from 'react-router-dom';
class SideBar extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="#" className="brand-link">
            <img src="dist/img/photo_2018-12-13_21-40-22.jpg" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
            <span className="brand-text font-weight-light">witness </span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        
      </div> */}
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <p>
                      Complain
                <span className="right badge badge-danger">0 complains</span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <p>
                      Review Application
               
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <p>
                      View Notification
               
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/profileBO" className="nav-link">
                    <p>
                      Profile
              </p>
                  </a>
                </li>


              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>

    )
  }
}
export default SideBar;