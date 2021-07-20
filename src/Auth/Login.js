import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <div classname="register-box">
            <div classname="register-logo">
              <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>
            <div classname="card">
              <div classname="card-body register-card-body">
                <p classname="login-box-msg">Register a new membership</p>
                <form action="../../index.html" method="post">
                  <div classname="input-group mb-3">
                    <input type="text" classname="form-control" placeholder="Full name" />
                    <div classname="input-group-append">
                      <div classname="input-group-text">
                        <span classname="fas fa-user">
                        </span></div>
                    </div>
                  </div>
                  <div classname="input-group mb-3">
                    <input type="email" classname="form-control" placeholder="Email" />
                    <div classname="input-group-append">
                      <div classname="input-group-text">
                        <span classname="fas fa-envelope">
                        </span></div>
                    </div>
                  </div>
                  <div classname="input-group mb-3">
                    <input type="password" classname="form-control" placeholder="Password" />
                    <div classname="input-group-append">
                      <div classname="input-group-text">
                        <span classname="fas fa-lock">
                        </span></div>
                    </div>
                  </div>
                  <div classname="input-group mb-3">
                    <input type="password" classname="form-control" placeholder="Retype password" />
                    <div classname="input-group-append">
                      <div classname="input-group-text">
                        <span classname="fas fa-lock">
                        </span></div>
                    </div>
                  </div>
                  <div classname="row">
                    <div classname="col-8">
                      <div classname="icheck-primary">
                        <input type="checkbox" id="agreeTerms" name="terms" defaultvalue="agree" />
                        <label htmlfor="agreeTerms">
                          I agree to the <a href="#">terms</a>
                        </label>
                      </div>
                    </div>
                    {'{'}/* /.col */{'}'}
                    <div classname="col-4">
                      <button type="submit" classname="btn btn-primary btn-block">Register</button>
                    </div>
                    {'{'}/* /.col */{'}'}
                  </div>
                </form>
                <div classname="social-auth-links text-center">
                  <p>- OR -</p>
                  <a href="#" classname="btn btn-block btn-primary">
                    <i classname="fab fa-facebook mr-2">
                      Sign up using Facebook
              </i></a><i classname="fab fa-facebook mr-2">
                    <a href="#" classname="btn btn-block btn-danger">
                      <i classname="fab fa-google-plus mr-2">
                        Sign up using Google+
                </i></a><i classname="fab fa-google-plus mr-2">
                    </i></i></div><i classname="fab fa-facebook mr-2"><i classname="fab fa-google-plus mr-2">
                      <a href="login.html" classname="text-center">I already have a membership</a>
                    </i></i></div><i classname="fab fa-facebook mr-2"><i classname="fab fa-google-plus mr-2">
                      {'{'}/* /.form-box */{'}'}
                    </i></i></div><i classname="fab fa-facebook mr-2"><i classname="fab fa-google-plus mr-2">{'{'}/* /.card */{'}'}
                    </i></i></div><i classname="fab fa-facebook mr-2"><i classname="fab fa-google-plus mr-2">
                    </i></i></div><i classname="fab fa-facebook mr-2"><i classname="fab fa-google-plus mr-2">
                    </i></i></div>

    )
  }
}
