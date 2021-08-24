import React, { Component } from 'react'
import SideBar from './SideBar'
import Header from '../Applicant/Header'
import axios from 'axios';
import Swal from 'sweetalert2';
class BoPlaningConsent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planingConsents: [],
            rejected: [],
            accepted: [],
            pend: []
        }
    }
    HandleClick() {
        Swal.fire({
            title: 'Success',
            type: 'success',
            text: 'successfully Approved',
        });
    }
    componentDidMount() {
        const tokenString = localStorage.getItem('token');
        axios
            .get("http://localhost:8000/api/bo/pc",
                { headers: { authorization: `Bearer ${tokenString}` } })
            .then((response) => {
                if (response.massage === "unauthenticated") {
                    console.log('hey');
                }
                console.log(response.data.data);
                this.setState({
                    planingConsents: response.data.data,
                    rejected: response.data.data.filter(data => data.status === 2),
                    accepted: response.data.data.filter(data => data.status === 1),
                    pend: response.data.data.filter(data => data.status === 0),
                })

            })

    }
    acceptPC = async id => {
        const tokenString = localStorage.getItem('token');
        await axios
            .get(`http://localhost:8000/api/bo/acceptPc/${id}`,
                { headers: { authorization: `Bearer ${tokenString}` } });
        this.HandleClick();
        window.location.reload();
    };
    rejectPc = async id => {
        const tokenString = localStorage.getItem('token');
        await axios
            .get(`http://localhost:8000/api/bo/rejectPc/${id}`,
                { headers: { authorization: `Bearer ${tokenString}` } });
        Swal.fire({
            title: 'Success',
            type: 'success',
            text: 'successfully Rejected',
        });
        window.location.reload();
    }
    render() {
        const { planingConsents, rejected, accepted, pend } = this.state;
        return (
            <div>
                <Header />
                <SideBar />
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
                                        <li className="breadcrumb-item"><a href="#home">Home</a></li>
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
                                                {
                                                    rejected.length
                                                }
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
                                                    <th>Planning ID</th>
                                                    <th>Applicant Name</th>
                                                    <th>Bureau</th>
                                                    <th>Status</th>
                                                    <th>Details</th>
                                                    <th>Accept/Reject</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {planingConsents.map((planingConsent, index) =>
                                                    <tr>
                                                        <td key={index}>{planingConsent.id}</td>
                                                        <td >{planingConsent.applicant.first_name}</td>
                                                        <td >{planingConsent.bureau}</td>
                                                        <td >{(() => {
                                                            if (planingConsent.status === 0) {
                                                                return <p>Pending</p>
                                                            } if (planingConsent.status === 1) {
                                                                return <p>Accepted</p>
                                                            } if (planingConsent.status === 2) {
                                                                return <p>Rejected</p>
                                                            }
                                                        })()}</td>
                                                        <td ><button type="button" class="btn btn-block btn-outline-primary btn-xs">Details</button></td>
                                                        {/* {planingConsent.status === 0 ?
                                                        <td ><button onClick={this.acceptPC.bind(this,planingConsent.id)} class="btn btn-block btn-outline-warning btn-xs">Accept</button></td>:
                                                        <td ><button onClick={this.rejectPc.bind(this,planingConsent.id)} class="btn btn-block btn-outline-danger btn-xs">Reject</button></td>
                                                        } */}
                                                        {(() => {
                                                            if (planingConsent.status === 0) {
                                                                return <td ><button onClick={this.acceptPC.bind(this, planingConsent.id)} class="btn btn-block btn-outline-warning btn-xs">Accept</button></td>
                                                            } else if (planingConsent.status === 1) {
                                                                return <td><button onClick={this.rejectPc.bind(this, planingConsent.id)} class="btn btn-block btn-outline-danger btn-xs">Reject</button></td>
                                                            } else if (planingConsent.status === 2) {
                                                                return <td><button onClick={this.acceptPC.bind(this, planingConsent.id)} class="btn btn-block btn-outline-warning btn-xs">Accept</button></td>
                                                            }
                                                        })()}


                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* /.table-responsive */}
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer clearfix">
                                    <a href="#floating" className="btn btn-sm btn-info float-left">Place New Order</a>
                                    <a href="#floating1" className="btn btn-sm btn-secondary float-right">View All Orders</a>
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
export default BoPlaningConsent;