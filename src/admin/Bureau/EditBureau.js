import React, { Component } from 'react'
import Header from '../../Applicant/Header'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Sidebar from '../Sidebar'
import Swal from 'sweetalert2';
class EditBureau extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: {
                id:"",
                bureau: "",
                subcity: "",
                isLoading: "",
            },
            msg: "",
        };
    }
    HandleClick() {  
        Swal.fire({  
          title: 'Success',  
          type: 'success',  
          text: 'successfully Edited ',  
        });  
      }
    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`http://127.0.0.1:8000/api/getBureau/${id}`).then(
            (response) => {
                this.setState({
                    Data: {
                        ...this.state.Data,
                        id:response.data.data.id,   
                        Bureau: response.data.data.bureau,
                        subcity: response.data.data.subcity,
                    }
                })
            })
    }
    onChangehandler = (e, key) => {
        const { Data } = this.state;
        Data[e.target.name] = e.target.value;
        this.setState({ Data });
    };
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true });
        axios
            .put("http://localhost:8000/api/editBureau", this.state.Data)
            .then((response) => {
                this.setState({ isLoading: false });
                if (response.status === 200) {
                    this.HandleClick();
                    this.setState({
                        msg: response.message,
                        Data: {
                            Bureau: "",
                            subcity: "",
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
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Edit Bureau</h1>
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
                                                    <input type="text" name="subcity" className="form-control" id="firstInput" placeholder="Enter subcity" value={this.state.Data.subcity} onChange={this.onChangehandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="lastInput">Enter Bureau</label>
                                                    <input type="text" name="Bureau" className="form-control" id="lastInput" placeholder="Enter bureau code" value={this.state.Data.Bureau} onChange={this.onChangehandler} />
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
export default EditBureau;