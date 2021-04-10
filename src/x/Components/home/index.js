import React from 'react'
import Postlist from '../posts/postlist'
import PostSlider from '../posts/postslider'
import PostHighlight from '../posts/posthighlight'
import Testimanials from '../testimonials/index'
import Postcategories from '../posts/postcategories'
import { Link } from 'react-router-dom'


export default function Index(props) {
    return (
        <div>
            

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 primary-color">
                        <div className="container">
                            <div className="row mt-2 mb-2">
                                <div className="col-sm-7 p-5">
                                    <h3> Blogger and Academic Writer </h3> <hr/>
                                    <p className="text-justify pt-2">
                                    This is A Centre for All Experts. We Offer the best Academic Writing Solutions at the Cheapest Prices and Quality Niched Blogging. Get all Latest Jobs Updates and Connect Directly with Your employer through our Job Application Solutions.
                                    </p>
                                    <div>
                                        <Link to="orderassignment" className="btn btn-info">Order an Assignment</Link>
                                    </div>
                                </div>
                                <div className="col-sm-5">

                                    <PostSlider />

                                </div>
                            </div>
                        </div>
                        {/* .container */}
                    </div>
                    {/* .col-sm-12 */}
                </div>
                {/* .row */}

                <div className="row">
                    <div className="col-sm-6 col-md-2 mt-5 mb-5  d-none d-md-block">
                        <div className="sticky-top top-nav">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item primary-color btr-6">More on Academics</li>
                                <li className="list-group-item">Home</li>
                                <li className="list-group-item">Academic Bio</li>
                                <li className="list-group-item">Pay Rates</li>
                                <li className="list-group-item">Services</li>
                                <li className="list-group-item">Work Samples</li>
                                <li className="list-group-item">Testimonials</li>
                            </ul>
                            

                        </div>
                    </div>

                    <div className="col-sm-12 col-md-7 col-lg-7 Xorder-md-3 mt-5">
                        <Postlist />
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-3 mt-5">
                        <div className="sticky-top top-nav">

                            <div className="row">
                                <div className="col-sm-12 -bottom-8">
                                    <h6 className="primary-color p-3 text-white btr-6">Jobs</h6>
                                </div>

                                <PostHighlight />
                               
                                <div className="col-sm-12 mt-2 mb-3">
                                    <Postcategories />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-12">
                        <Testimanials />
                    </div>
                </div>
                {/* .row */}
                
            </div>


        </div>
    )
}
