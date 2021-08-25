import React, { Component } from 'react'
import Header from '../Applicant/Header'
import Sidebar from './SideBar';
import axios from 'axios';
import Swal from 'sweetalert2';
class ViewMyComplain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complains: [],
            rejected: [],
            accepted: [],
            pend: [],
            isLoading: "",
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
        axios.get('http://127.0.0.1:8000/api/boa/viewMyComplain', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenString}`
            }
        }).then(
            (response) => {
                this.setState({
                    complains: response.data.data,
                    rejected: response.data.data.filter(data => data.status === 2),
                    accepted: response.data.data.filter(data => data.status === 1),
                    pend: response.data.data.filter(data => data.status === 0),
                })
            }
        )

    }
    acceptPC = async id => {
        const tokenString = localStorage.getItem('token');
        await axios
            .get(`http://localhost:8000/api/boa/acceptPc/${id}`,
                { headers: { authorization: `Bearer ${tokenString}` } });
        this.HandleClick();
        window.location.reload();
    };
    rejectPc = async id => {
        const tokenString = localStorage.getItem('token');
        await axios
            .get(`http://localhost:8000/api/boa/rejectPc/${id}`,
                { headers: { authorization: `Bearer ${tokenString}` } });
        Swal.fire({
            title: 'Success',
            type: 'success',
            text: 'successfully Rejected',
        });
        window.location.reload();
    }
    removeData = async id => {
        const tokenString = localStorage.getItem('token');
        await axios
            .get(`http://127.0.0.1:8000/api/applicant/deleteComplain/${id}`,
                { headers: { authorization: `Bearer ${tokenString}` } }).then(
                    (response) => {
                        console.log(response.data)
                        if (response.status === 200) {
                            Swal.fire({
                                title: 'Success',
                                type: 'success',
                                text: response.data.success,
                            });
                        }
                    }
                );

        this.setState((prev) => ({
            complains: prev.complains.filter(
                (complain) => complain.id !== id
            )
        }));
    };
    render() {
        const { complains, pend, rejected, accepted } = this.state;
        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <div className="card">
                        <div className="card-header border-transparent">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="info-box">
                                        <span className="info-box-icon bg-info elevation-1"><i className="fas fa-file" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Applications</span>
                                            <span className="info-box-number">
                                                {complains.length}
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
                            <h3 className="card-title">List of Complains</h3>



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
                                            <th>Complain</th>
                                            <th>Applicant name</th>
                                            <th>Status</th>
                                            <th>Details</th>
                                            <th>Accept/Reject</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {complains.map((Complain, index) =>
                                            <tr key={index}>
                                                <td >{Complain.complain}</td>
                                                <td >{Complain.applicant.first_name}</td>
                                                <td >{(() => {
                                                    if (Complain.status === 0) {
                                                        return <p>Pending</p>
                                                    } if (Complain.status === 1) {
                                                        return <p>Accepted</p>
                                                    } if (Complain.status === 2) {
                                                        return <p>Rejected</p>
                                                    }
                                                })()}</td>
                                                <td ><button type="button" class="btn btn-block btn-outline-primary btn-xs">Details</button></td>
                                                {(() => {
                                                    if (Complain.status === 0) {
                                                        return <td ><button onClick={this.acceptPC.bind(this, Complain.id)} class="btn btn-block btn-outline-warning btn-xs">Accept</button></td>
                                                    } else if (Complain.status === 1) {
                                                        return <td><button onClick={this.rejectPc.bind(this, Complain.id)} class="btn btn-block btn-outline-danger btn-xs">Reject</button></td>
                                                    } else if (Complain.status === 2) {
                                                        return <td><button onClick={this.acceptPC.bind(this, Complain.id)} class="btn btn-block btn-outline-warning btn-xs">Accept</button></td>
                                                    }
                                                })()}
                                                <td ><a onClick={this.removeData.bind(this, Complain.id)} href="#remove" type="button" class="btn btn-block btn-outline-danger btn-xs">Delete</a></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            {/* /.table-responsive */}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ViewMyComplain;
