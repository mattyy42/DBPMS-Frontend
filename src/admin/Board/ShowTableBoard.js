import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Header from '../../Applicant/Header'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
class ShowTableBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: [],
            isLoading: "",
        }
    }
    HandleClick() {  
        Swal.fire({  
          title: 'Success',  
          type: 'success',  
          text: 'successfully Deleted',  
        });  
      }
    componentDidMount() {
        const tokenString = localStorage.getItem('token');
        axios
            .get("http://localhost:8000/api/admin/showAllBoard",
                { headers: { authorization: `Bearer ${tokenString}` } })
            .then((response) => {
                if (response.massage == "unauthenticated") {
                    console.log('hey');
                }
                this.setState({

                    boards: response.data.data,
                    // building_officer: response.data.buildingOfficer,
                })
                
            })

    }
    removeData = async id =>{
        await axios
          .delete(`http://localhost:8000/api/admin/deleteBuildingOfficer/${id}`);
          this.HandleClick();
          this.setState((prev) => ({
            boards: prev.boards.filter(
              (board) => board.id !== id
            )
          })); 
      };
    render() {
        const { boards } = this.state;
        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <div className="card">
                        <div className="card-header border-transparent">
                            <h3 className="card-title">All Board of Appliance</h3>
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
                                        <th>Board of Appliance Name</th>
                                            <th>Bureau</th>
                                            <th>Active Complain</th>
                                            <th>Phone number</th>
                                            <th>Details</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {boards.map((board, index) =>
                                            <tr>
                                                 <td key={board.id }>{board.first_name}</td>
                                                <td >{board.bureau}</td>
                                                <td >{board.active_applications}</td>
                                                <td >{board.phone_number}</td>
                                                <td ><button type="button"  class="btn btn-block btn-outline-primary btn-xs">Details</button></td>
                                                <td ><Link to={`/admin/edit/${board.id}`}><button type="button" class="btn btn-block btn-outline-warning btn-xs">Edit</button></Link></td>
                                                <td ><button onClick={this.removeData.bind(this,board.id)}type="button" class="btn btn-block btn-outline-danger btn-xs">Delete</button></td>
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
export default ShowTableBoard;