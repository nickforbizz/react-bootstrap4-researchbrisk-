import React from 'react'
import { Link } from 'react-router-dom'

export default function Navacademics(props) {
    return (
        <>
            <div className="sticky-top top-nav">
                <div className="list-group list-group-flush">
                    <div className="list-group-item  primary-color btr-6">More on Academics</div>
                    <Link to="/" className="list-group-item list-group-item-action">Home</Link>    
                    <Link to="/academicbio" className="list-group-item list-group-item-action">Academic Bio</Link>
                    <Link to="/academicpayrates" className="list-group-item list-group-item-action">Pay Rates</Link>
                    <Link to="/academicservices" className="list-group-item list-group-item-action">Services</Link>
                    <Link to="/academicworksamples" className="list-group-item list-group-item-action">Work Samples</Link>
                    <Link to="/academictestimonials" className="list-group-item list-group-item-action">Testimonials</Link>
                </div>
            </div>
        </>
    )
}
