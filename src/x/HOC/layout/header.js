import React from 'react'
import { Link } from 'react-router-dom'

export default function header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light primary-color-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">ResearchBrisk</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0 navbar-nav-scroll" style={{maxHeight: '60vh'}}>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Academic
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><Link className="dropdown-item" to="#">Academic Bio</Link></li>
                            <li><Link className="dropdown-item" to="#">Pay Rates</Link></li>
                            <li><Link className="dropdown-item" to="#">Services</Link></li>
                            <li><Link className="dropdown-item" to="#">Work Samples</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="orderassignment">Order An Assignment</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/posts">Posts </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/jobs" tabIndex="-1" aria-disabled="true">Jobs</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}
