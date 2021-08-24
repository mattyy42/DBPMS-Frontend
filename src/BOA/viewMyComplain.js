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
            isLoading: "",
        }
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
                })
            }
        )

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
        const { complains } = this.state;
        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <div className="card">
                        <div className="card-header border-transparent">
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
                                            <th>Board of Appliance Name</th>
                                            <th>Details</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {complains.map((Complain, index) =>
                                            <tr key={index}>
                                                <td >{Complain.complain}</td>
                                                <td >{Complain.board.first_name}</td>
                                                <td ><button type="button" class="btn btn-block btn-outline-primary btn-xs">Details</button></td>
                                                <td ><a href="#edit" type="button" class="btn btn-block btn-outline-warning btn-xs">Edit</a></td>
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
