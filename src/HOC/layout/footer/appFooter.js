import React from 'react'
import { Link } from 'react-router-dom'



// styles


export default function appFooter() {
    return (
        <React.Fragment>
            <article className="footer p-5 primary-color-dark">
                <footer>
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <h5>ResearchBrisk</h5>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <h5 className="underline">Solutions</h5>    <hr/>
                            <ul className="list-group mt-4 list-white">
                                <li ><Link to="/academic_bio">Academic</Link></li>
                                <li> <Link to="/posts">Posts</Link> </li>
                                <li> <Link to="/post_view/56/Office Assistants Needed. Hurry and Apply">Podcasts</Link> </li>
                                <li><Link to="/jobs">Jobs</Link></li>
                                <li><Link to="/post_view/56/Office Assistants Needed. Hurry and Apply">Adverts</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <h5 className="underline">Company</h5> <hr/>
                            <ul className="list-group mt-4 list-white">
                                <li> <Link to="/about">About</Link></li>
                                <li><Link to="/academicservices">Services</Link></li>
                                <li><Link to="/academicworksamples">Work Samples</Link></li>
                                <li><Link to="/academicpayrates">Pay Rates</Link></li>
                                <li><Link to="/academictestimonials">Testimonials</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <h5 className="underline">Connect</h5> <hr/>
                            <ul className="list-group mt-4 list-white">
                                <li> <i className="fa fa-facebook-official f_icon" aria-hidden="true"></i> Facebook </li>
                                <li> <i className="fa fa-instagram f_icon" aria-hidden="true"></i> Instagram </li>
                                <li> <i className="fa fa-twitter-square f_icon" aria-hidden="true"></i> Twitter </li>
                                <li> <i className="fa fa-linkedin-square f_icon" aria-hidden="true"></i> Linked In </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </article>
        </React.Fragment>
    )
}
