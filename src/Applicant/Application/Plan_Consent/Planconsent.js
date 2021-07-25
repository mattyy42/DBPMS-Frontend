import React, { Component } from 'react'
import axios from 'axios';
export default class Planconsent extends Component {

    userData;
    constructor(props)
     {
      super(props);
      this.state = {
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
                application_id: "",
                application_issued_date: "",
                ground_floor_number: "",
                owner_full_name: "",
                reperesentative_full_name: "",
                phone_number: "",
                mobile_number: "",
                TIN_number: "",
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
        .post("http://localhost:8000/api/applicant/submitpc", this.state.signupData)
        .then((response) => {
          this.setState({ isLoading: false })
          if (response.data.status === 200) {
            console.log(response)
            this.setState({
              msg: response.data.message,
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
                application_id: "",
                application_issued_date: "",
                ground_floor_number: "",
                owner_full_name: "",
                reperesentative_full_name: "",
                phone_number: "",
                mobile_number: "",
                TIN_number: "",
              },
            });
            setTimeout(() => {
              this.setState({ msg: "" });
            }, 2000);
          }
  
          if (response.data.status === "failed") {
            this.setState({ msg: response.data.message });
            setTimeout(() => {
              this.setState({ msg: "" });
            }, 2000);
          }
        });
    };
    
    render() {
        const isLoading = this.state.isLoading;
       
       
        return (

            
            // <div className="content-wrapper">
            //     <section className="content-header">
            //         <div className="container-fluid">
            //             <div className="row mb-2">
            //                 <div className="col-sm-3">
            //                     <h1>Plan Consent</h1>
            //                 </div>
            //                 <div className="col-sm-9">
            //                     <ol className="breadcrumb float-sm-right">
            //                         <li className="breadcrumb-item"><a href="#">Home</a></li>
            //                         <li className="breadcrumb-item active">Project Consent</li>
            //                     </ol>
            //                 </div>
            //             </div>
            //         </div>{/* /.container-fluid */}
            //     </section>
            //     <section className="content">
            //         <div className="row">
            //             <div className="col-md">
            //                 <div className="card card-primary">
            //                     <div className="card-header disabled">
            //                         <h3 className="card-title">Applicant's Information</h3>
            //                         <div className="card-tools">
            //                             <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            //                                 <i className="fas fa-minus" />
            //                             </button>
            //                         </div>
            //                     </div>
            //                     <div className="card-body">
            //                         <div className="form-group">
            //                             <label htmlFor="inputName">Owner's Full Name</label>
            //                             <input type="text" id="inputName" className="form-control" />
            //                         </div>
            //                         <div className="form-group">
            //                             <label htmlFor="inputName">Representative's Full Name</label>
            //                             <input type="text" id="inputName" className="form-control" />
            //                         </div>
            //                         <div className="form-group">
            //                             <label htmlFor="inputName">Phone Number</label>
            //                             <input type="text" id="inputName" className="form-control" />
            //                         </div>
            //                         <div className="form-group">
            //                             <label htmlFor="inputName">Alternate Phone Number</label>
            //                             <input type="text" id="inputName" className="form-control" />
            //                         </div>
            //                         <div className="form-group">
            //                             <label htmlFor="inputName">TIN Number</label>
            //                             <input type="text" id="inputName" className="form-control" />
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="row">
            //             <div className="col-md">
            //                 <div className="card card-primary">
            //                     <div className="card-header">
            //                         <h3 className="card-title">Applicant's Address</h3>
            //                         <div className="card-tools">
            //                             <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            //                                 <i className="fas fa-minus" />
            //                             </button>
            //                         </div>
            //                     </div>
            //                     <div className="card-body">
            //                         <div className="form-group">
            //                             <label htmlFor="inputName">City</label>
            //                             <input type="text" id="inputName" className="form-control" />
            //                         </div>
            //                         <div className="form-group">
            //                             <label htmlFor="inputDescription">Sub City</label>
            //                             <textarea id="inputDescription" className="form-control" rows={4} defaultValue={""} />
            //                         </div>
            //                         <div className="form-group">
            //                             <label htmlFor="inputStatus">New Woreda</label>
            //                             <select id="inputStatus" className="form-control custom-select">
            //                                 <option selected disabled>Select one</option>
            //                                 <option>On Hold</option>
            //                                 <option>Canceled</option>
            //                                 <option>Success</option>
            //                             </select>
            //                         </div>
            //                         <div className="form-group">
            //                             <label htmlFor="inputClientCompany">Street Address</label>
            //                             <input type="text" id="inputClientCompany" className="form-control" />
            //                         </div>
            //                         <div className="form-group">
            //                             <label htmlFor="inputProjectLeader">House Number</label>
            //                             <input type="text" id="inputProjectLeader" className="form-control" />
            //                         </div>
            //                     </div>
            //                 </div></div></div>
            //         <div className="row">
            //             <div className="col-md">
            //                 <div className="card card-primary">
            //                     <div className="card-header">
            //                         <h3 className="card-title">Applicant's Information</h3>
            //                         <div className="card-tools">
            //                             <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            //                                 <i className="fas fa-minus" />
            //                             </button>
            //                         </div>
            //                     </div>
            //                     <div className="card-body">
            //                         <div className="form-group">
            //                             <label htmlFor="inputName">Project Name</label>
            //                             <input type="text" id="inputName" className="form-control" />
            //                         </div>
            //                         <div className="form-group">
            //                             <label htmlFor="inputDescription">Project Description</label>
            //                             <textarea id="inputDescription" className="form-control" rows={4} defaultValue={""} />
            //                         </div>
            //                         <div className="form-group">
            //                             <label htmlFor="inputStatus">Status</label>
            //                             <select id="inputStatus" className="form-control custom-select">
            //                                 <option selected disabled>Select one</option>
            //                                 <option>On Hold</option>
            //                                 <option>Canceled</option>
            //                                 <option>Success</option>
            //                             </select>
            //                         </div>
            //                         <div className="form-group">
            //                             <label htmlFor="inputClientCompany">Client Company</label>
            //                             <input type="text" id="inputClientCompany" className="form-control" />
            //                         </div>
            //                         <div className="form-group">
            //                             <label htmlFor="inputProjectLeader">Project Leader</label>
            //                             <input type="text" id="inputProjectLeader" className="form-control" />
            //                         </div>
            //                     </div>
            //                 </div></div></div>
            //     </section>


            // </div>

            <div className="content-wrapper">
            <section className="content">
               <form action="../../index.html" method="post">
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
                        <select className="form-control" name="city" id="city"  form>
                          <option value="AABPB">AdissAbeba</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="sub_city">Sub city</label>
                        <select className="form-control" name="sub_city" id="sub_city"  v
                         form required>
                          <option value="AKBPB">Adisketema</option>
                          <option value="AKBPB">Akakikality</option>
                          <option value="Arada">Arada</option>
                          <option value="Bole">Bole</option>
                          <option value="Gullele">Gullele</option>
                          <option value="Kirkos">Kirkos</option>
                          <option value="kolfekeranio">kolfekeranio</option>
                          <option value="Lemi kura">Lemi krau</option>
                          <option value="Lideta">Lideta</option>
                          <option value="Nifas silk-lafto">Nifas silk-lafto</option>
                          <option value="Yeka">Yeka</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="wereda">wereda</label>
                        <select className="form-control" name="wereda" id="new_wereda"  form required>
                          <option value="wereda 1">wereda 1</option>
                          <option value="wereda 2">wereda 2</option>
                          <option value="wereda 3">wereda 3</option>
                          <option value="wereda 4">wereda 4</option>
                          <option value="wereda 5">wereda 5</option>
                          <option value="wereda 6">wereda 6</option>
                          <option value="wereda 7">wereda 7</option>
                          <option value="wereda 8">weredau 8</option>
                          <option value="wereda 9">wereda 9</option>
                          <option value="wereda 10">wereda 10</option>
                          <option value="wereda 11">wereda 11</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputstreet_address">street address</label>
                        <input type="text" className="form-control" id="street_address" placeholder="Enter your street address"  required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputshouse_number">House Number</label>
                        <input type="number"  className="form-control" id="house_number"  placeholder="Enter your House Number"   required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputownership_authentication_number">Ownership Authentication Number</label>
                        <input type="number" className="form-control" id="ownership_authentication_number" placeholder="Enter your ownership authentication number"  required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsownership_authentication_type"> Ownership Authentication Type</label>
                        <input type="text"  className="form-control" id=" ownership_authentication_type"  placeholder="Enter Ownership Authentication Type"  required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsownership_authentication_issued_date"> Ownership Authentication Isued Date</label>
                        <input type="date"  className="form-control" id=" ownership_authentication_issued_date"    placeholder="Enter Ownership Authentication Isued Date"required />
                      </div>
                     
                      <div className="form-group">
                        <label htmlFor="exampleInputs name_stated_on_ownership_authentication">  Name Stated On Ownership Authentication</label>
                        <input type="text"  className="form-control" id="name_stated_on_ownership_authentication"   placeholder="Enter Name Stated On Ownership Authentication" required />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="previous_service">previous service</label>
                        <select className="form-control" name="previous_service" id="previous_service"  form required>
                          <option value="New construction">New construction</option>
                          <option value="Improvement / Expansion">Improvement / Expansion</option>
                          <option value="Construction permit extension">Construction permit extension</option>
                        </select>
          
                      </div>
                      <div className="form-group">
                        <label htmlFor="type_of_construction">type_of_construction</label>
                        <select className="form-control" name="type_of_construction" id="type_of_construction"  form required>
                          <option value="New construction">New construction</option>
                          <option value="Improvement / Expansion">Improvement / Expansion</option>
                          <option value="Construction permit extension">Construction permit extension</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsapplication_id"> Application Id</label>
                        <input type="number"  className="form-control" id="application_id"  placeholder=" Enter Application ID"   required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsapplication_issued_date"> Application Issued Date</label>
                        <input type="date"  className="form-control" id=" application_issued_date"    required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsground_floor_number"> Ground Floor Number</label>
                        <input type="number"  className="form-control" id=" ground_floor_number"  placeholder=" Number of Ground Floors??" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsowner_full_name"> Owner Full Name</label>
                        <input type="text"  className="form-control" id=" owner_full_name"   placeholder="Enter your Owner Full Name"   required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsreperesentative_full_name"> Reperesentative Full Name</label>
                        <input type="text"  className="form-control" id=" reperesentative_full_name"  placeholder="Enter your Reperesentative Full Name"   required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsphone_number"> phone_number</label>
                        <input type="phone"  className="form-control" id=" phone_number"  placeholder="+2519....."  required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsmobile_number"> mobile_numberr</label>
                        <input type="phone"  className="form-control" id=" mobile_number"   placeholder="+2519....."  required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputsTIN_number"> TIN Number</label>
                        <input type="text"  className="form-control" id=" TIN_number"   placeholder="Enter your TIN Number"  required />
                      </div>
                         
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
                </div> <div className="card-footer">
                                                <button type="submit" className="btn btn-primary" onClick={this.onSubmitHandler}>Submit
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
