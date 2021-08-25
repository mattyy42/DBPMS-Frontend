import React, { Component } from 'react'
import axios from 'axios';
import SideBar from './SideBar'
import Header from '../Applicant/Header'
import Swal from 'sweetalert2';
class BoAddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            plan:{
                comment:"",
            },  
            isLoading: "",
        }

    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({
            id: id
        })
    }
    onChangehandler = (e, key) => {
        const { plan } = this.state;
        plan[e.target.name] = e.target.value;
        this.setState({ plan }); 
    };
    onSubmitHandler = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        this.setState({ isLoading: true });

        axios.post(`http://127.0.0.1:8000/api/bo/addComment/${this.state.id}`, this.state.plan, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 201) {
                Swal.fire({
                    title: 'Success',
                    type: 'success',
                    text: 'Comment successfully submitted',
                });

            }
            if (response.status === 200) {
                Swal.fire({
                    title: 'Failed',
                    type: 'failed',
                    text: response.data.success,
                });
            }

        }).catch((err) => {
            //handle error
            if (err.response.status === 422) {
                Swal.fire({
                    title: 'Failed',
                    type: 'success',
                    text: err.response.data.errors.complain,
                });
            }
        });
        this.setState({
            plan: {
                comment: ""
            }
        });
    }
    render() {
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
                                    <h1>Submit Comment </h1>
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
                                                    <label htmlFor="firstInput">Enter your comment on planing consent</label>
                                                    <textarea type="text" name="comment" className="form-control" id="firstInput" placeholder="Enter comment" value={this.state.planing} onChange={this.onChangehandler} />
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
export default BoAddComment;