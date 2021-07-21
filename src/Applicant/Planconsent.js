import React, { Component } from 'react'

export default class apply extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-3">
                                <h1>Plan Consent</h1>
                            </div>
                            <div className="col-sm-9">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Project Consent</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md">
                            <div className="card card-primary">
                                <div className="card-header disabled">
                                    <h3 className="card-title">Applicant's Information</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="inputName">Owner's Full Name</label>
                                        <input type="text" id="inputName" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputName">Representative's Full Name</label>
                                        <input type="text" id="inputName" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputName">Phone Number</label>
                                        <input type="text" id="inputName" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputName">Alternate Phone Number</label>
                                        <input type="text" id="inputName" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputName">TIN Number</label>
                                        <input type="text" id="inputName" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Applicant's Address</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="inputName">Project Name</label>
                                        <input type="text" id="inputName" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputDescription">Project Description</label>
                                        <textarea id="inputDescription" className="form-control" rows={4} defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputStatus">Status</label>
                                        <select id="inputStatus" className="form-control custom-select">
                                            <option selected disabled>Select one</option>
                                            <option>On Hold</option>
                                            <option>Canceled</option>
                                            <option>Success</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputClientCompany">Client Company</label>
                                        <input type="text" id="inputClientCompany" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputProjectLeader">Project Leader</label>
                                        <input type="text" id="inputProjectLeader" className="form-control" />
                                    </div>
                                </div>
                            </div></div></div>
                    <div className="row">
                        <div className="col-md">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Applicant's Information</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="inputName">Project Name</label>
                                        <input type="text" id="inputName" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputDescription">Project Description</label>
                                        <textarea id="inputDescription" className="form-control" rows={4} defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputStatus">Status</label>
                                        <select id="inputStatus" className="form-control custom-select">
                                            <option selected disabled>Select one</option>
                                            <option>On Hold</option>
                                            <option>Canceled</option>
                                            <option>Success</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputClientCompany">Client Company</label>
                                        <input type="text" id="inputClientCompany" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputProjectLeader">Project Leader</label>
                                        <input type="text" id="inputProjectLeader" className="form-control" />
                                    </div>
                                </div>
                            </div></div></div>
                </section>


            </div>

        )
    }
}
