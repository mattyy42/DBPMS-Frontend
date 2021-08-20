import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Header from '../../Applicant/Header'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
class ShowTableBO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buildingOfficers: [],
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
            .get("http://localhost:8000/api/admin/showAllOfficer",
                { headers: { authorization: `Bearer ${tokenString}` } })
            .then((response) => {
                if (response.massage === "unauthenticated") {
                    console.log('hey');
                }
                this.setState({
                    buildingOfficers: response.data.data,
                    // building_officer: response.data.buildingOfficer,
                })

            })

    }
    removeData = async id =>{
        await axios
          .delete(`http://localhost:8000/api/admin/deleteBuildingOfficer/${id}`);
          this.HandleClick();
          this.setState((prev) => ({
            buildingOfficers: prev.buildingOfficers.filter(
              (buildingOfficer) => buildingOfficer.id !== id
            )
          })); 
      };
    render() {
        const { buildingOfficers } = this.state;
        return (
            <div>
                <Sidebar />
                <Header />

                <div className="content-wrapper">
                    <div className="card">
                        <div className="card-header border-transparent">
                            <h3 className="card-title">All Building Officers</h3>
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
                                            <th>Building Officer Name</th>
                                            <th>Bureau</th>
                                            <th>Active Application</th>
                                            <th>Phone number</th>
                                            <th>Details</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {buildingOfficers.map((buildingOfficer, index) =>
                                            <tr>
                                                <td key={index}>{buildingOfficer.first_name}</td>
                                                <td >{buildingOfficer.bureau}</td>
                                                <td >{buildingOfficer.role.active_applications}</td>
                                                <td >{buildingOfficer.phone_number}</td>
                                                <td ><button type="button" class="btn btn-block btn-outline-primary btn-xs">Details</button></td>
                                                <td ><Link to={`/admin/edit/${buildingOfficer.id}`}><button class="btn btn-block btn-outline-warning btn-xs">Edit</button></Link></td>
                                                <td ><button onClick={this.removeData.bind(this,buildingOfficer.id)} type="button" class="btn btn-block btn-outline-danger btn-xs">Delete</button></td>
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
export default ShowTableBO;