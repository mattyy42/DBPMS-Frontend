import React, { Component } from 'react'
import Header from '../../Applicant/Header'
import Sidebar from '../Sidebar'
class RegisterBO extends Component {
    render() {
        return (
            <div>a
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Register Building Officer</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
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
                                        <form id="quickForm">
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="firstInput">Enter first name</label>
                                                    <input type="text" name="first_name" className="form-control" id="firstInput" placeholder="Enter first name" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="lastInput">Enter last name</label>
                                                    <input type="text" name="last_name" className="form-control" id="lastInput" placeholder="Enter last name" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="phoneInput">Enter phone number </label>
                                                    <input type="number" name="phone_number" className="form-control" id="phoneInput" placeholder="Enter phone number" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Password</label>
                                                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="roleInput">Role</label>
                                                    <input type="text" name="role" className="form-control" id="roleInput" placeholder="Assign Role" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="bureauInput">Bureau</label>
                                                    <input type="text" name="bureau" className="form-control" id="bureauInput" placeholder="Assign Bureau" />
                                                </div>
                                               
                                            </div>
                                            {/* /.card-body */}
                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">Submit</button>
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



        )
    }
}
export default RegisterBO;