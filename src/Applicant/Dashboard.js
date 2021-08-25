import React, { Component } from 'react'
import axios from 'axios';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planingConsents:[],
      applications: [],
      rejected: [],
      accepted: [],
      pend: [],
      rejectedPc: [],
      acceptedPc: [],
      pendPc: [],
      perPage: 5,
      currentPage: 0,
      offset: 0,
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
          rejected: response.data.data.filter(data => data.application_stutus === 2),
          accepted: response.data.data.filter(data => data.application_stutus === 1),
          pend: response.data.data.filter(data => data.application_stutus === 0),
        })

      })
      axios.get('http://127.0.0.1:8000/api/applicant/viewpc', {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${tokenString}`
        }
      }).then(
        (response) => {
          this.setState({
            planingConsents: response.data.data,
            rejectedPc: response.data.data.filter(data => data.status === 2),
            acceptedPc: response.data.data.filter(data => data.status === 1),
            pendPc: response.data.data.filter(data => data.status === 0),
          })
        }
      )
    
  }
  render() {
    const { planingConsents,applications, accepted, pend, rejected,pendPc,acceptedPc,rejectedPc } = this.state;
    
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
              <h3>Applications</h3>
              <div className="row">

                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-file" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Applications</span>
                      <span className="info-box-number">
                        {applications.length}
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
                        {rejected.length}
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
                      <span className="info-box-number">{accepted.length}</span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-warning elevation-1"><i className="fa fa-exclamation" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Pending</span>
                      <span className="info-box-number">{pend.length}</span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                  {/* /.info-box */}
                </div>
              </div>
              <h3>Planing Consents</h3>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box">
                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-file" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Planing Consents</span>
                      <span className="info-box-number">
                        {planingConsents.length}
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
                        {rejectedPc.length}
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
                      <span className="info-box-number">{acceptedPc.length}</span>
                    </div>
                    {/* /.info-box-content */}
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="info-box mb-3">
                    <span className="info-box-icon bg-warning elevation-1"><i className="fa fa-exclamation" /></span>
                    <div className="info-box-content">
                      <span className="info-box-text">Pending</span>
                      <span className="info-box-number">{pendPc.length}</span>
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
