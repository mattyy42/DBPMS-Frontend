import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Link } from 'react-router-dom'
export default class Getstarted extends Component {
    render() {
        
        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <div className="container-fluid">
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
                                <h5 className="m-0">Application Process Overview</h5>
                                <p>This journey details the process that a business goes through in order to construct a commercial building premise, ranging from land authentication to acquiring necessary consents and permits, to final inspection once the construction is complete. Government organizations involved in this journey to provide the required services are as follows; Addis Ababa city administration land holding registration and information agency, Addis Ababa city adminstration construction permit and control authority and Addis Ababa water and sewerage authority.</p>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="row ">
                                <div className="col-md">
                                    <div className="card card-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">1. Land Authentication </h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The business representative provides a debt provision document to verify that the land is not registered as collateral, and a neighbor consent document to show that the neighbors consent to the construction. On verification of the two documents, the Land Administration Bureau authenticates the land for development by issuing a land holding certificate.
                                            <br></br>
                                            <b>
                                                Location
                                            </b>
                                            <br></br>
                                            Addis Ababa city administration land holding registration and information agency
                                            <br></br>
                                            <b>
                                                Process Overview</b>
                                            <br></br>
                                            Fill an application form and attach debt provision document, neighbor consent document, and lease agreement or title deed
                                            Bureau verifies the land to ascertain its legality for construction
                                            After verification, Bureau issues land holding certificate

                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="card card-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">2. Planning Consent</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            Building Permit Department will issue a planning consent if all requirements meet the master plan guidelines. The business representative is physically present for the duration of this step. If land is owned by the business, steps follow the standard application process. But, the construction permit for a leased land requires agreement between owner and business, in addition to all other documents. The scale and purpose of the building determines whether the business will apply at the federal level or sub-city level.

                                            Location

                                            For high rise building

                                            Addis Ababa City Adminstration Construction Permit and Control Authority
                                            For small rise building

                                            Sub-city office
                                            Process Overview

                                            Fill an application form at the sub-city building permit department
                                            Submit the form, attach title deed and agreement between design consultant/ company and developer. This agreement needs to be authenticated by the power of attorney
                                            The building permit department reviews the application based on the guidelines set out in the master plan
                                            On verification, the building permit department issues plan consent document
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="card card-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">3. Construction Permit</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            In this process, the business representative or the design consultant submits all the necessary design documents for approval subsequently and once the designs are approved the city center construction/building permit office/sub-city office issues the construction permit for the customer. The construction permit for a leased land expires in 4 years and a private land lasts for 5 years.

                                            Location

                                            For high rise building

                                            Addis Ababa City Adminstration Construction Permit and Control Authority
                                            For small rise building

                                            Sub-city office
                                            Process Overview

                                            Submit the architectural plan and a copy of design consultant’s license
                                            The bureau reviews the design and if any corrections are required then adds comments for revision
                                            Customer makes corrections and resubmits and the bureau approves the design
                                            Once architectural design is approved, customer submits the structural plan, electrical plan, sanitary system and soil test report
                                            The bureau reviews the design and if any corrections are required then adds comments for revision
                                            Customer makes corrections and resubmits and the bureau reviews it for approval
                                            The bureau provides the construction permit
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="card card-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">4. Commensment Permit</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            This permit is issued before breaking ground to start construction of building. The steps vary based on whether it is a new construction on an undeveloped land or if it involves demolition of existing property and relocating existing infrastructural systems e.g., sewer, power lines.

                                            Location

                                            For high rise building

                                            Addis Ababa City Adminstration Construction Permit and Control Authority
                                            For small rise building

                                            Sub-city office
                                            Process Overview

                                            Submit authentication certificate (refer to Step Land Authentication)
                                            Apply for Demolition license if land is developed
                                            Relocate infrastructure if needed
                                            Submit a copy of title deed of property along with application form at an in-person visit to AAWSA
                                            AAWSA conducts a site visit to inspect the location of the property and to decide on the specifics of the connection
                                            Obtain water and sewage connection from AAWSA
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="card card-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">5. Construction Phase</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            Business hires a consultant to supervise the construction and avoid errors. The design consultant can perform duties of the supervisor, or a new consultant can be hired.

                                            Location

                                            Site visit

                                            Process Overview

                                            Call caseworker for inspection at every defined staged
                                            Caseworker physically inspects the building
                                            In case of building error caseworker prohibits continuation of construction
                                            Submit a copy of title deed of property along with application form at an in-person visit to AAWSA
                                            AAWSA conducts a site visit to inspect the location of the property and to decide on the specifics of the connection
                                            Obtain water and sewage connection from AAWSA
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="card card-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">6. Water Line Connection</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            Here, the service of a new water line connection gets provided.

                                            Location

                                            Addis Ababa Water and Sewerage Authority

                                            Process Overview

                                            Fill and submit the application request form
                                            The bureau assigns a technician to visit the site and estimate the necessary tools and equipments
                                            Based on the estimation customer pays the required payment
                                            Bureau starts the work
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="card card-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">7.Sewerage Line Connection </h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            Here, the service of a new sewerage line connection gets provided. The service time it takes is considered for 3 meters long sewerage line.

                                            Location

                                            Addis Ababa Water and Sewerage Authority

                                            Process Overview

                                            Fill and submit the request form
                                            If a representative, submit the authorized power of attorney document
                                            The bureau visits the area and estimate the cost
                                            Customer pays the estimation and signs an agreement
                                            Assigned technician from the bureau starts working on the site
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="card card-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">8. Occupancy Permit</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            After final inspection, occupancy permit is issued, allowing inhabitants to occupy the building. At this point, the business may process a request for water and sewage connection from the Addis Ababa Water and Sewerage Authority (AAWSA)

                                            Location

                                            For high rise building

                                            Addis Ababa City Adminstration Construction Permit and Control Authority
                                            For small rise building

                                            Sub-city office
                                            Process Overview

                                            Apply for occupancy permit and attach the architectural and building plans, including all the inspection reports
                                            Caseworker reviews documents and conducts a site visit to inspect if the building has all the required amenities based on the scale and purpose of building
                                            Caseworker provides occupancy permit.
                                            Submit a copy of title deed of property along with application form at an in-person visit to AAWSA
                                            AAWSA conducts a site visit to inspect the location of the property and to decide on the specifics of the connection.
                                            Obtain water and sewage connection from AAWSA
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="card card-primary collapsed-card">
                                        <div className="card-header">
                                            <h3 className="card-title">9. Periodic Building Inspection</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            {/* /.card-tools */}
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            The building permit department conducts unannounced visits to inspect the condition of the building and amenities

                                            Location

                                            Site visit

                                            Process Overview

                                            Caseworker conducts unannounced visits to inspect the building and recommends repair or maintenance, as deemed necessary
                                            Repairs or maintenance, if any, are carried out
                                            The inspections continue on an ongoing basis
                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}


                                </div>

                            </div>

                        </div>


                    </div>
                    <div className="col text-center">
                   <Link exact to="./apply">
                   <button type="button" className="btn btn-block btn-info btn-sm">Start Here</button> 
                   </Link>
                                   </div>
                                   
                </div>
               
                
            </div>
            
        )
    }
}
