import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
export default class Planconsent extends Component {

  userData;
  constructor(props) {


    super(props);
    this.HandleClick = this.HandleClick.bind(this);
    this.state = {
      redirect: false,
      msg: "",
      signupData: {
        city: "",
        sub_city: "",
        new_woreda: "",
        street_address: "",
        house_number: "",
        ownership_authentication_number: "",
        ownership_authentication_type: "",
        ownership_authentication_issued_date: "",
        name_stated_on_ownership_authentication: "",
        previous_service: "",
        type_of_construction: "",

        application_issued_date: "",
        ground_floor_number: "",
        owner_full_name: "",
        reperesentative_full_name: "",
        phone_number: "",
        mobile_number: "",
        TIN_number: "",
        isLoading: "",
      },


    };
  }
  HandleClick() {
    Swal.fire({
      title: 'Success',
      type: 'success',
      text: 'successfuly applied for plan consent',
    });
  }

  HandleClickAutoclose() {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 1000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  onChangehandler = (e, key) => {
    const { signupData } = this.state;
    signupData[e.target.name] = e.target.value;
    this.setState({ signupData });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const token = localStorage.getItem('token');
    console.log(this.state.signupData);
    axios
      .post("http://localhost:8000/api/applicant/submitpc", this.state.signupData,
        {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
      .then((response) => {
        this.setState({ isLoading: false })
        // console.log('status2 ',response.status)
        if (response.status === 201) {
          localStorage.setItem('isSubmitted', true);
          this.HandleClick();

          console.log('status ', response.status);
          this.setState({
            msg: response.data.message,
            redirect: true,
            signupData: {
              city: "",
              sub_city: "",
              new_woreda: "",
              street_address: "",
              house_number: "",
              ownership_authentication_number: "",
              ownership_authentication_type: "",
              ownership_authentication_issued_date: "",
              name_stated_on_ownership_authentication: "",
              previous_service: "",
              type_of_construction: "",

              application_issued_date: "",
              ground_floor_number: "",
              owner_full_name: "",
              reperesentative_full_name: "",
              phone_number: "",
              mobile_number: "",
              TIN_number: "",
            },
          })



          setTimeout(() => {
            this.setState({ msg: "" });
          }, 2000);
        }



      }).catch((err) => {
        console.log(err);
        //handle error
        if (
          err.response.status === 401) {
          this.setState({
            // errMsg: errresponse.data.error,
            isLoading: false,
            isShowError: true,
          });

        }
      });   
  };


  render() {
    const isLoading = this.state.isLoading;
    const submitted = localStorage.getItem('isSubmitted');
    console.log(submitted)
    if (submitted) {
      if (this.state.redirect) {
        return <Redirect to="/applicant/success" />;
      };
    }

    return (
      <div className="content-wrapper">
        <section className="content">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Get Started</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Get Started</li>
                  </ol>
                </div>{/* /.col */}
              </div>{/* /.row */}
            </div>{/* /.container-fluid */}
            <div className="col-sm">
              <h5 className="m-0">Application Process Phase 1 Plan Consent</h5>
              <p>Building Permit Department will issue a planning consent if all requirements meet the master plan guidelines. The business representative is physically present for the duration of this step. If land is owned by the business, steps follow the standard application process. But, the construction permit for a leased land requires agreement between owner and business, in addition to all other documents. The scale and purpose of the building
                determines whether the business will apply at the federal level or sub-city level.</p>
            </div>
          </div>
          <form onSubmit={this.onSubmitHandler}>
            <div className="row">

              <div className="col-md">

                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">plan Consent</h3>
                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>

                  </div>

                  <div className="card-body">

                    <div className="form-group">

                      <label htmlFor="city">City</label>
                      <select className="form-control" name="city" id="city" defaultValue={this.state.selectValue} onChange={this.onChangehandler} required >
                        <option value="" onChange={this.onChangehandler}>Select</option>
                        <option value="AABPB" >Addis Ababa</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="sub_city">Sub city</label>
                      <select className="form-control" name="sub_city" id="sub_city" defaultValue={this.state.selectValue} onChange={this.onChangehandler} required>
                        <option value="" onChange={this.onChangehandler}>Select</option>
                        <option value="AKBPB" onChange={this.onChangehandler}>Adisketema</option>
                        <option value="AKBPB" onChange={this.onChangehandler}>Akakikality</option>
                        <option value="ABPB" onChange={this.onChangehandler}>Arada</option>
                        <option value="BBPB" onChange={this.onChangehandler}>Bole</option>
                        <option value="GPBP" onChange={this.onChangehandler}>Gullele</option>
                        <option value="KBPB" onChange={this.onChangehandler}>Kirkos</option>
                        <option value="KKBPB" onChange={this.onChangehandler}>kolfekeranio</option>
                        <option value="LKBPB" onChange={this.onChangehandler}>Lemi krau</option>
                        <option value="LBPB" onChange={this.onChangehandler}>Lideta</option>
                        <option value="NSBPB" onChange={this.onChangehandler}>Nifas silk-lafto</option>
                        <option value="YBPB" onChange={this.onChangehandler}>Yeka</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Woreda">Woreda</label>
                      <input type="Number" className="form-control" name="new_woreda" id="new_woreda" placeholder="Enter your Woreda" value={this.state.signupData.new_woreda} onChange={this.onChangehandler} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputstreet_address">street address</label>
                      <input type="text" className="form-control" name="street_address" id="street_address" placeholder="Enter your street address" value={this.state.signupData.street_address} onChange={this.onChangehandler} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputshouse_number">House Number</label>
                      <input type="text" className="form-control" id="house_number" name="house_number" placeholder="Enter your House Number" value={this.state.signupData.house_number} onChange={this.onChangehandler} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputownership_authentication_number">Ownership Authentication Number</label>
                      <input type="number" className="form-control" id="ownership_authentication_number" name="ownership_authentication_number" placeholder="Enter your ownership authentication number" value={this.state.signupData.ownership_authentication_number} onChange={this.onChangehandler} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputsownership_authentication_type"> Ownership Authentication Type</label>
                      <input type="text" className="form-control" id="ownership_authentication_type" name="ownership_authentication_type" placeholder="Enter Ownership Authentication Type" value={this.state.signupData.ownership_authentication_type} onChange={this.onChangehandler} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputsownership_authentication_issued_date"> Ownership Authentication Isued Date</label>
                      <input type="date" className="form-control" id="ownership_authentication_issued_date" name="ownership_authentication_issued_date" placeholder="Enter Ownership Authentication Isued Date" value={this.state.signupData.ownership_authentication_issued_date} onChange={this.onChangehandler} required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputs name_stated_on_ownership_authentication">  Name Stated On Ownership Authentication</label>
                      <input type="text" className="form-control" id="name_stated_on_ownership_authentication" name="name_stated_on_ownership_authentication" placeholder="Enter Name Stated On Ownership Authentication" value={this.state.signupData.name_stated_on_ownership_authentication} onChange={this.onChangehandler} required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="previous_service">previous service</label>
                      <select className="form-control" name="previous_service" id="previous_service" defaultValue={this.state.selectValue} onChange={this.onChangehandler} required required>
                        <option value="New construction" >New construction</option>
                        <option value="Improvement / Expansion" >Improvement / Expansion</option>
                        <option value="Construction permit extension">Construction permit extension</option>
                      </select>

                    </div>
                    <div className="form-group">
                      <label htmlFor="type_of_construction">type_of_construction</label>
                      <select className="form-control" name="type_of_construction" id="type_of_construction" defaultValue={this.state.selectValue} onChange={this.onChangehandler} required required>
                        <option value="New construction" >New construction</option>
                        <option value="Improvement / Expansion" >Improvement / Expansion</option>
                        <option value="Construction permit extension">Construction permit extension</option>
                      </select>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="exampleInputsapplication_id"> Application Id</label>
                        <input type="number"  className="form-control" id="application_id" name="application_id"  placeholder=" Enter Application ID" value={this.state.signupData.application_id} onChange={this.onChangehandler}  required />
                      </div> */}
                    <div className="form-group">
                      <label htmlFor="exampleInputsapplication_issued_date"> Application Issued Date</label>
                      <input type="date" className="form-control" id="application_issued_date" name="application_issued_date" value={this.state.signupData.application_issued_date} onChange={this.onChangehandler} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputsground_floor_number"> Ground Floor Number</label>
                      <input type="number" className="form-control" id="ground_floor_number" name="ground_floor_number" placeholder="Number of Ground Floors" value={this.state.signupData.ground_floor_number} onChange={this.onChangehandler} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputsowner_full_name"> Owner Full Name</label>
                      <input type="text" className="form-control" id="owner_full_name" name="owner_full_name" placeholder="Enter your Owner Full Name" value={this.state.signupData.owner_full_name} onChange={this.onChangehandler} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputsreperesentative_full_name"> Reperesentative Full Name</label>
                      <input type="text" className="form-control" id="reperesentative_full_name" name="reperesentative_full_name" placeholder="Enter your Reperesentative Full Name" value={this.state.signupData.reperesentative_full_name} onChange={this.onChangehandler} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputsphone_number"> phone_number</label>
                      <input type="phone" className="form-control" id="phone_number" name="phone_number" placeholder="+2519....." value={this.state.signupData.phone_number} onChange={this.onChangehandler} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputsmobile_number"> mobile_numberr</label>
                      <input type="phone" className="form-control" id="mobile_number" name="mobile_number" placeholder="+2519....." value={this.state.signupData.mobile_number} onChange={this.onChangehandler} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputsTIN_number"> TIN Number</label>
                      <input type="text" className="form-control" id="TIN_number" name="TIN_number" placeholder="Enter your TIN Number" value={this.state.signupData.TIN_number} onChange={this.onChangehandler} required />
                    </div>

                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
            </div> <div className="card-footer">

              <button type="submit" class="btn btn-primary" >Submit
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
          </form></section>
      </div>





    )
  }
}
