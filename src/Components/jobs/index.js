import React from 'react'

export default function Index(props) {
    return (
        <div>
            <div className="alert alert-info text-uppercase">
                <div className="container">
                    <form className="form-inline mt-3 justify-content-center">
                        <div className="form-group mb-2 Xmx-sm-2">
                            <b className="display-5"> Find a Job </b>
                        </div>
                        <div className="form-group mb-2 mx-sm-2">
                            <select name="" className="form-control" id="" style={{ width: '20rem' }}>
                                <option value=""> --select Category-- </option>
                            </select>
                        </div>
                        <div className="form-group mb-2 mx-sm-2">
                            <select name="" className="form-control" id="" style={{ width: '20rem' }}>
                                <option value=""> --select Industry-- </option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-success mb-2"> SEARCH </button>

                    </form>
                </div>
            </div>
            {/* .alert */}

            <div className="container">
                <div className="row mb-5 mt-2">
                    <div className="col-sm-12">
                        <div class="card mb-1">
                            <div class="card-body">
                                <h5 class="card-title">Instructional Content Developer – Nairobi</h5>
                                <div>
                                    <div className="float-md-right mb-2"><b>Job Function: </b> Software & Data</div>
                                    <h6 className="card-subtitle text-muted mb-2">Elewa Company Ltd</h6>
                                    <p> Location | Full Time | <b>Ksh: </b> Confidential </p>
                                </div>
                                <hr />
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div class="card mb-1">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 className="card-subtitle text-muted mb-2">subtitle</h6> <hr />
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div class="card mb-1">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 className="card-subtitle text-muted mb-2">subtitle</h6> <hr />
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
