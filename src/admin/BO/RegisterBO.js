import React, { Component } from 'react'
import Header from '../../Applicant/Header'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Sidebar from '../Sidebar'
class RegisterBO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signupData: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                phone_number: "",
                bureau: "",
                role: "",
                isLoading: "",
            },
            msg: "",
            allBureau: []
        };
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/getAllBureau').then(
            (response) => {
                // response.data.data.map((item, i) => {
                //     this.setState({
                //         allBureau: item.bureau
                //     })
                // })
                this.setState({
                    allBureau: response.data.data,
                })
            }
        )
    }
    onChangehandler = (e, key) => {
        const { signupData } = this.state;
        signupData[e.target.name] = e.target.value;
        this.setState({ signupData });
    };
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true });
        axios
            .post("http://localhost:8000/api/admin/registerBuildingOfficer", this.state.signupData)
            .then((response) => {
                this.setState({ isLoading: false });
                if (response.status === 200) {
                    this.setState({
                        msg: response.message,
                        signupData: {
                            first_name: "",
                            last_name: "",
                            email: "",
                            password: "",
                            phone_number: "",
                        },
                    });

                    setTimeout(() => {
                        this.setState({ msg: "" });
                    }, 2000);
                    this.setState({
                        msg: response.msg,
                        redirect: true,
                    });
                }

                if (response.status === "failed") {
                    this.setState({ msg: response.msg });
                    setTimeout(() => {
                        this.setState({ msg: "" });
                    }, 2000);
                }
            });
    };
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
                                                    <input type="text" name="first_name" className="form-control" id="firstInput" placeholder="Enter first name" value={this.state.signupData.first_name} onChange={this.onChangehandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="lastInput">Enter last name</label>
                                                    <input type="text" name="last_name" className="form-control" id="lastInput" placeholder="Enter last name" value={this.state.signupData.last_name} onChange={this.onChangehandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="phoneInput">Enter phone number </label>
                                                    <input type="number" name="phone_number" className="form-control" id="phoneInput" placeholder="Enter phone number" value={this.state.signupData.phone_number} onChange={this.onChangehandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" value={this.state.signupData.email} onChange={this.onChangehandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Password</label>
                                                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.signupData.passwor} onChange={this.onChangehandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="roleInput">Role</label>
                                                    <input type="text" name="role" className="form-control" id="roleInput" placeholder="Assign Role" value={this.state.signupData.role} onChange={this.onChangehandler} />
                                                </div>
                                                <div className="form-group">
                                                    <select onChange={this.onChangehandler}>
                                                        {/* {console.log(this.state.allBureau)} */}
                                                        {this.state.allBureau.map((bureau) => (
                                                            <option value={bureau.bureau}>{bureau.bureau}</option>
                                                        ))}

                                                    </select>
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