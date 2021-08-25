import React, { Component } from 'react'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="loader_bg">
                    <div className="loader"><img src="images/loading.gif" alt="#" /></div>
                </div>
                {/* end loader */}
                {/* header */}
                <header>
                    {/* header inner */}
                    <div className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                    <div className="full">
                                        <div className="center-desk">
                                            <div className="logo">
                                                <a href="index.html">DBPMS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                    <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon" />
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarsExample04">
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active">
                                                    <a className="nav-link" href="/#">Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/#"> About</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/#"> Service</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/register">Register</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/login">Login</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* end header inner */}
                {/* end header */}
                {/* banner */}
                <section className="banner_main">
                    <div className="container">
                        <div className="row d_flex">
                            <div className="col-md-5">
                                <div className="text-bg">
                                    <h1>Digital Building Permit System</h1>
                                    <span>Welocome to A.A city Administration Digital building permit system</span>
                                    <p>This journey details the process that a business goes through in order to construct a commercial building premise, ranging from land authentication to acquiring necessary consents and permits, to final inspection once the construction is complete. Government organizations involved in this journey to provide the required services are as follows; Addis Ababa city administration land holding registration and information agency, Addis Ababa city adminstration
              construction permit and control authority and Addis Ababa water and sewerage authority.</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="text-img">
                                    <figure><img src="images/img.png" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end banner */}
                {/* Hosting */}
                <div id className="hosting">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>Getting Started</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="web_hosting">
                                    <figure><img src="images/web.jpg" alt="#" /></figure>
                                    <p> one-stop portal for e-government services that improves ease of doing business in Ethiopia through
              the automation of essential government services leveraging information and communication technologies</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end Hosting */}
                {/* Services  */}
                <div id="service" className="Services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>Process Overview</h2>
                                    <p>Addis Ababa city administration land holding registration and information agency, Addis Ababa city adminstration constru
                                    ction permit and control authority and Addis Ababa water and sewerage authority.
            </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="Services-box">
                                    <i><img src="images/service1.png" alt="#" /></i>
                                    <h3> Planning Consent</h3>
                                    <p>Building Permit Department will issue a planning consent if all requirements meet the master plan guidelines.</p> </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="Services-box">
                                    <i><img src="images/service2.png" alt="#" /></i>
                                    <h3>Land Authentication</h3>
                                    <p>The business representative provides a debt provision document
                                    to verify that the land is not registered as collateral, and a neighbor c
              onsent</p>
                                    <p />
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="Services-box">
                                    <i><img src="images/service3.png" alt="#" /></i>
                                    <h3>Construction Permit</h3>
                                    <p>In this process, the business representative
              or the design consultant submits all the necessary design documents for approval subsequently and once the designs are approved the city</p>
                                </div>
                            </div>
                            {/* <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="Services-box">
               <i><img src="images/service4.png" alt="#" /></i>
               <h3>VPS Hosting</h3>
               <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
         </div>
         <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="Services-box">
               <i><img src="images/service5.png" alt="#" /></i>
               <h3>Cloud Hosting</h3>
               <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
         </div>
         <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="Services-box">
               <i><img src="images/service6.png" alt="#" /></i>
               <h3>Reseller Hosting</h3>
               <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
            </div>
         </div>
         <a class="read_more" href="#">Read More</a>*/}
                        </div>
                    </div>
                </div>
                {/* end Servicess */}
                {/* why */}
                {/* end contact */}
                {/*  footer */}
                <footer>
                    <div className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 offset-md-1">
                                    <div className="cont">
                                        <h3>Contact now</h3>
                                        <p>+(251)-11-12649942490 In the compound of old ERPA Building,
                                        Arada Subcity, Behind Lycee G / Mariam School, Churchill Road Addis Ababa, Ethiopia
              </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer></div>

        )
    }
}
export default LandingPage
