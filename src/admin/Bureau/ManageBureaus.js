import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Header from '../../Applicant/Header'
import axios from 'axios';
import { Link } from 'react-router-dom';
class ManageBureaus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bureaus: [],
            isLoading: "",
        }
    }
    componentDidMount() {
        const tokenString = localStorage.getItem('token');
        axios.get('http://127.0.0.1:8000/api/getAllBureau').then(
            (response) => {
                this.setState({
                    bureaus: response.data.data,
                })
            }
        )

    }
    removeData = async id => {
        await axios
            .delete(`http://localhost:8000/api/deleteBureau/${id}`)
        this.setState((prev) => ({
            bureaus: prev.bureaus.filter(
                (bureau) => bureau.id !== id
            )
        }));
    };
    render() {
        const { bureaus } = this.state;
        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <div className="card">
                        <div className="card-header border-transparent">
                            <h3 className="card-title">Manage Bureaus</h3>

                            <Link to="/admin/bureauAdd"><button type="button" style={{ marginLeft: 200 }} class="btn btn-outline-primary btn-xs">Add Bureau</button></Link>

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
                                            <th>Bureau Name</th>
                                            <th>Subcity</th>
                                            <th>Details</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bureaus.map((bureau, index) =>
                                            <tr>
                                                <td key={bureau.id}>{bureau.bureau}</td>
                                                <td >{bureau.subcity}</td>
                                                <td ><button type="button" class="btn btn-block btn-outline-primary btn-xs">Details</button></td>
                                                <td ><Link to={`/admin/bureauEdit/${bureau.id}`}><button type="button" class="btn btn-block btn-outline-warning btn-xs">Edit</button></Link></td>
                                                <td ><button onClick={this.removeData.bind(this, bureau.id)} type="button" class="btn btn-block btn-outline-danger btn-xs">Delete</button></td>
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
export default ManageBureaus;