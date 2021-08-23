import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios';
import Sidebar from './Sidebar'
import Swal from "sweetalert2";
export default class Submitcomplain extends Component {
    constructor(props) {
        super(props);
        // this.HandleClick = this.HandleClick.bind(this);

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
                <Sidebar />
                <Header />
                <div className="content-wrapper">
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
                                            <th>Details</th>
                                            <th>Complain</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applications.map((application, index) =>
                                            <tr>
                                                <td key={index}>{application.id}</td>
                                                <td >{application.buildingOfficer.first_name}</td>
                                                <td >{application.bureau}</td>
                                                <td >{application.appointment_time}</td>
                                                <td ><button type="button" class="btn btn-block btn-outline-primary btn-xs" onClick={this.HandleClick}>Details</button></td>
                                                <td ><button type="button" class="btn btn-block btn-outline-warning btn-xs">Complain</button></td>
                                                <td ><button type="button" class="btn btn-block btn-outline-danger btn-xs">Delete</button></td>
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




