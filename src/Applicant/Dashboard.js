import React, { Component } from 'react'
import axios from 'axios';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [],
    }
  }
  componentDidMount() {
    const tokenString = localStorage.getItem('token');
    axios
      .get("http://localhost:8000/api/applicant/viewApplication",
        { headers: { authorization: `Bearer ${tokenString}` } })
      .then((response) => {
        if (response.massage === "unauthenticated") {
          console.log('hey');
        }
        this.setState({
         
          applications: response.data.data,
          // building_officer: response.data.buildingOfficer,
        })
        
      })
      
  }
  render() {
    const { applications } = this.state;
    return (
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#homepage">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                  </ol>
                </div>{/* /.col */}
              </div>{/* /.row */}
            </div>{/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-file" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Applications</span>
                      <span className="info-box-number">
                        10
                        <small> Total</small>
                      </span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/* /.info-box */}
                </div>
                {/* /.col */}
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-ban" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Rejected</span> <span className="info-box-number">
                        10
                        <small> Total</small>
                      </span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/* /.info-box */}
                </div>
                {/* /.col */}
                {/* fix for small devices only */}
                <div className="clearfix hidden-md-up" />
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-success elevation-1"><i className="fas fa-thumbs-up" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Accepted</span>
                      <span className="info-box-number">760</span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-warning elevation-1"><i className="fa fa-exclamation" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Pending</span>
                      <span className="info-box-number">2,000</span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/* /.info-box */}
                </div>
              </div>


              <div className="card">
                <div className="card-header border-transparent">
                  <h3 className="card-title">My Applications</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                      <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table m-0">
                      <thead>
                        <tr>
                          <th>Application ID</th>
                          <th>Building Officer Name</th>
                          <th>Status</th>
                          <th>Appointment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((application, index) =>
                          <tr>
                            <td key={index}>{application.id}</td>
                            <td >{application.buildingOfficer.first_name}</td>
                            <td >{application.bureau}</td>
                            {/* <td >{application.appointment.appointment_time}</td> */}
                          </tr>
                          )}
                      </tbody>
                    </table>
                  </div>
                  {/* /.table-responsive */}
                </div>
                {/* /.card-body */}
                <div className="card-footer clearfix">
                  <a href="#footer" className="btn btn-sm btn-info float-left">Place New Order</a>
                  <a href="#footer" className="btn btn-sm btn-secondary float-right">View All Orders</a>
                </div>
                {/* /.card-footer */}
              </div>
              {/* /.card */}




            </div>{/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </div>

    )
  }
}

export default Dashboard;
