import React, { Component } from 'react'
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: "",
      role: "",
      isLoading: false,
      redirect: false,
      isShowError: false,
      errMsg: "",
    };
  }
  onChangehandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let data = {};
    data[name] = value;
    this.setState(data);
  };

  onSignInHandler = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    axios
      .post("http://127.0.0.1:8000/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        this.setState({ isLoading: false });
      
        if (response.status === 200) {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("isSubmitted", false);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem("role", response.data.user.role);
        
          this.setState({
            msg: response.data.message,
            redirect: true,
            role: response.data.user.role,
          });
        }
       
      }).catch((err) =>{
        //handle error
        if (
          err.response.status === 401) {
          this.setState({
           // errMsg: errresponse.data.error,
           isLoading:false,
            isShowError: true,
          });

        }
    });
      
  };
  render() {
    const login = localStorage.getItem("isLoggedIn");
    if (login) {
      if (this.state.redirect) {
        if (this.state.role == 'admin') {
          return <Redirect to="/admin" />;
        }
        if (this.state.role == 'applicant') {
          return <Redirect to="/applicant" />;
        }
        if (this.state.role == 'BO') {
          return <Redirect to="/bo/dashboard" />
        }
      }
    }
    const isLoading = this.state.isLoading;
    const isShowError=this.state.isShowError;
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="/"><b>Building Permit Portal</b><br></br>for Addis Ababa</a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              {isShowError ? (
                < div className="alert alert-danger alert-dismissible fade show" role="alert">Invalid login credentials. Please try again.<button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></div>
              ) :
                (<span></span>)
              }

              <form>
                <div className="input-group mb-3">
                  <input type="email" name="email" value={this.state.email} onChange={this.onChangehandler} className="form-control" placeholder="Email" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" name="password" value={this.state.password} onChange={this.onChangehandler} className="form-control" placeholder="Password" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">

                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" onClick={this.onSignInHandler} className="btn btn-primary btn-block"> Sign In
            {isLoading ? (
                        <span
                          className="spinner-border spinner-border-sm ml-5"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      ) : (
                          <span></span>
                        )}</button>
                  </div>
                  {/* /.col */}
                </div>
              </form>

              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <Link to="/register" > <a className="text-center">Register as New Applicant</a></Link>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>

      </div >
    )
  }
}
export default Login;