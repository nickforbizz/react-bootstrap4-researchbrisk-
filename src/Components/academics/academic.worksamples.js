import React from 'react'
import { Link } from 'react-router-dom'
import Navacademics from './nav.academics'  

export default function Academicpayrates(props) {
    return (
        <div>

            <div className="m-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="text-muted text-center">Academic Work Samples</h3> <hr />
                    </div>
                    <div className="col-xs-12 col-md-3 d-none d-md-block">
                        <Navacademics />
                    </div>
                    <div className="col-xs-12 col-sm-9">
                        
                        <p className="text-justify font-weight-light">
                            <div class="card m-3" >
                                <div className="card-body">
                                    <h5 className="card-title">Card work sample 1</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle work sample 1</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/" class="card-link">Download document</Link>
                                </div>
                            </div>

                            <div class="card m-3" >
                                <div className="card-body">
                                    <h5 className="card-title">Card work sample 2</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle payrate 2</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/" class="card-link">Download document</Link>
                                </div>
                            </div>
                      
                        </p>
                    </div>

                </div>
                

            </div>
        </div>
    )
}
