import React, { Component } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'
import Header from '../Applicant/Header'
import Swal from 'sweetalert2';
export default class Portal_grid_post extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                    <Sidebar />
                    <div className="content-wrapper">
                        {/* Content Header (Page header) */}
                        <section className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1>Submit Complain</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#home">Home</a></li>
                                            <li className="breadcrumb-item active">Validation</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* Main content */}
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    {/* left column */}
                                    <div className="col-md-12">
                                        {/* jquery validation */}
                                        <div className="card card-primary">
                                            <div className="card-header">
                                                <h3 className="card-title">Fill the information </h3>
                                            </div>
                                            {/* /.card-header */}
                                            {/* form start */}
                                            <form >
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputstreet_address">Enter Your Post Title</label>
                                                        <input type="text" className="form-control" name="street_address" id="street_address" placeholder="Enter your street address" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="firstInput">Enter your Post</label>

                                                        <textarea type="text" name="complain" className="form-control" id="firstInput" placeholder="Enter Complain" onChange={this.onChangehandler} />
                                                    </div>
                                                </div>
                                                {/* /.card-body */}
                                                <div className="card-footer">
                                                    <button type="submit" onClick={this.onSubmitHandler} className="btn btn-primary">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                        {/* /.card */}
                                    </div>
                                    {/*/.col (left) */}
                                    {/* right column */}
                                    <div className="col-md-6">
                                    </div>
                                    {/*/.col (right) */}
                                </div>
                                {/* /.row */}
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* /.content */}
                    </div>
                </div>
            </div>
        )
    }
}
