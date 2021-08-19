import React, { Component } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
class ShowComplain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complains: [],
            isLoading: "",
        }
    }
    componentDidMount() {
        const tokenString = localStorage.getItem('token');
        axios.get('http://127.0.0.1:8000/api/applicant/viewComplain', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${tokenString}`
            }
        }).then(
            (response) => {
                this.setState({
                    complains: response.data.data,
                })
            }
        )

    }
    render() {
        const { complains } = this.state;
        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <div className="card">
                        <div className="card-header border-transparent">
                            <h3 className="card-title">My Complains</h3>



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
                                            <th>Board of Appliance Name</th>
                                            <th>Details</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {complains.map((Complain, index) =>
                                            <tr>
                                                <td key={Complain.id}>{Complain.complain}</td>
                                                <td >{Complain.board.first_name}</td>
                                                <td ><button type="button" class="btn btn-block btn-outline-primary btn-xs">Details</button></td>
                                                {/* <td ><Link to={`/admin/ComplainEdit/${Complain.id}`}><button type="button" class="btn btn-block btn-outline-warning btn-xs">Edit</button></Link></td> */}
                                                {/* <td ><button onClick={this.removeData.bind(this, Complain.id)} type="button" class="btn btn-block btn-outline-danger btn-xs">Delete</button></td> */}
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
export default ShowComplain;
