import React, { Component } from 'react'
import Header from '../../Applicant/Header'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Sidebar from '../Sidebar'
class AddBureau extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signupData: {
                bureau: "",
                subcity: "",
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
            .post("http://localhost:8000/api/addBureau", this.state.signupData)
            .then((response) => {
                this.setState({ isLoading: false });
                if (response.status === 200) {
                    this.setState({
                        msg: response.message,
                        signupData: {
                            Bureau: "",
                            subcity: "",
                        },
                    });

                    // MySwal.fire(
                    //     'Good job!',
                    //     'You clicked the button!',
                    //     'success'
                    //   )
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
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Add Bureau</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">RegisterBoard</li>
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
                                                    <label htmlFor="firstInput">Enter SubCity</label>
                                                    <input type="text" name="subcity" className="form-control" id="firstInput" placeholder="Enter subcity" value={this.state.signupData.subcity} onChange={this.onChangehandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="lastInput">Enter Bureau</label>
                                                    <input type="text" name="Bureau" className="form-control" id="lastInput" placeholder="Enter bureau code" value={this.state.signupData.Bureau} onChange={this.onChangehandler} />
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



        )
    }
}
export default AddBureau;