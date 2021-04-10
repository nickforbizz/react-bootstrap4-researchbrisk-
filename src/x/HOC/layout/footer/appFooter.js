import React from 'react'



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
                                <li ><a href="/academic_bio">Academic</a></li>
                                <li> <a href="/posts">Posts</a> </li>
                                <li> <a href="/post_view/56/Office Assistants Needed. Hurry and Apply">Podcasts</a> </li>
                                <li><a href="/jobs">Jobs</a></li>
                                <li><a href="/post_view/56/Office Assistants Needed. Hurry and Apply">Adverts</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <h5 className="underline">Company</h5> <hr/>
                            <ul className="list-group mt-4 list-white">
                                <li> <a href="/about">About</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/work_samples">Work Samples</a></li>
                                <li><a href="/payrates">Pay Rates</a></li>
                                <li><a href="/client_testimonials">Testimonials</a></li>
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
