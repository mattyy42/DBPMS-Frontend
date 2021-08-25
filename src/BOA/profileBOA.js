import React, { Component } from 'react'
import SideBar from './SideBar'
import Header from '../Applicant/Header'
import axios from 'axios';
import Swal from "sweetalert2";
class ProfileBOA extends Component {
    constructor(props) {
        super(props);
        this.HandleClick = this.HandleClick.bind(this);
        this.state = {
            signupData: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                password_confirmation: "",
                phone_number: "",
                isLoading: "",
            },
            msg: "",
        };
    }
    HandleClick() {
        Swal.fire({
            title: 'Success',
            type: 'success',
            text: 'successfully updated profile',
        });
    }
    onChangehandler = (e, key) => {
        const { signupData } = this.state;
        signupData[e.target.name] = e.target.value;
        this.setState({ signupData });
    };
    onSubmitHandler = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        this.setState({ isLoading: true });
        console.log(this.state.signupData)
        axios
            .put("http://localhost:8000/api/user/profileChange", this.state.signupData, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then((response) => {
                this.setState({ isLoading: false });
                if (response.status === 200) {
                    this.HandleClick();
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
        const isLoading = this.state.isLoading;
        return (

            <div>
                <Header />
                <SideBar />
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Profile</h1>
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
                                    {/* general form elements */}
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 style={{ color: "white" }} className="card-title">Fill the form to change the profile</h3>
                                        </div>
                                        {/* /.card-header */}
                                        {/* form start */}
                                        <form>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" name="first_name" placeholder="First name" value={this.state.signupData.first_name} onChange={this.onChangehandler} />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-user" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" name="last_name" placeholder="Last name" value={this.state.signupData.last_name} onChange={this.onChangehandler} />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-user" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.signupData.email} onChange={this.onChangehandler} />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-envelope" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.signupData.password} onChange={this.onChangehandler} />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-lock" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="password" className="form-control" name="password_confirmation" placeholder="confirm password" value={this.state.signupData.password_confirmation} onChange={this.onChangehandler} />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-lock" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="tel" className="form-control" name="phone_number" placeholder="Phone number" value={this.state.signupData.phone_number} onChange={this.onChangehandler} />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-user" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card-footer">
                                                <button onClick={this.onSubmitHandler} type="submit" class="btn btn-primary">Submit{isLoading ? (
                                                    <span
                                                        className="spinner-border spinner-border-sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    ></span>
                                                ) : (
                                                        <span></span>
                                                    )}</button>
                                            </div>
                                        </form>
                                    </div>
                                </div></div></div></section>

                    {/* /.content */}

                    {/* /.content */}
                </div>
            </div >



        )
    }
}
export default ProfileBOA;