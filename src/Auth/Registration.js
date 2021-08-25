import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
class Registration extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            signupData: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                confirm_password: "",
                phone_number: "",
                isLoading: "",
            },
            msg: "",
        };
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
            .post("http://localhost:8000/api/register", this.state.signupData)
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
        const isLoading = this.state.isLoading;
        if (this.state.redirect) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="hold-transition register-page">
                <div className="register-box">
                    <div className="register-logo">
                        <a href="/"><b>Building Permit Portal</b><br />for Addis Ababa</a>
                    </div>
                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="login-box-msg">Register a new membership</p>
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
                                    <input type="password" className="form-control" name="confirm_password" placeholder="confirm password" value={this.state.signupData.confirm_password} onChange={this.onChangehandler} />
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
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" required />
                                            <label htmlFor="agreeTerms">
                                                I agree to the <a href="#terms">terms</a>
                                            </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block" color="success" onClick={this.onSubmitHandler}>
                                            Register
                                            {isLoading ? (
                                                <span
                                                    className="spinner-border spinner-border-sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                ></span>
                                            ) : (
                                                    <span></span>
                                                )}
                                        </button>

                                    </div>
                                    {/* /.col */}
                                    <a href="/login" class="text-center">I already have a membership</a>
                                </div>
                            </form>

                        </div>
                        {/* /.form-box */}
                    </div>{/* /.card */}
                </div>
            </div>

        )
    }
}

export default Registration;
