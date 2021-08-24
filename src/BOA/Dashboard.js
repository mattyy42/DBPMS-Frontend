import React, { Component } from 'react'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationDatas: [],
      msg: "",

    };
  }
  componentDidMount() {
    
  }
  render() {
    const { applicationDatas } = this.state;
    return (
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Assigned applications</h1>
                </div>{/* /.col */}

              </div>{/* /.row */}
            </div>{/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}

          <div>
            <section className="content-header">
              <div className="container-fluid">

              </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="card">

                      {/* /.card-header */}
                      <div className="card-body">
                        <table id="example2" className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Applicant_Name</th>
                              <th>Appointment_date</th>
                              <th>progress</th>
                              <th>status</th>
                              <th>options</th>

                            </tr>
                          </thead>
                          <tbody>
                            {applicationDatas.map((application) =>
                              <tr>
                                <th>{application.applicant.first_name}</th>
                                 {/* <th>{application.appointment.appointment_time}</th> */}
                                <th>30%</th>
                                <th>pending</th>
                                <td>
                                  <button type="button" class="btn btn-block btn-primary dropdown-toggle" data-toggle="dropdown">
                                    see more
                                  </button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#view">view application</a>
                                    <a class="dropdown-item" href="#delete">delete application</a>
                                    <a class="dropdown-item" href="#add">Add comment</a>
                                    <a class="dropdown-item" href="#go">Go to appp</a>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}

                    {/* /.card */}
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container-fluid */}
            </section>
          </div>

        </div>
      </div>

    )
  }
}
export default Dashboard;