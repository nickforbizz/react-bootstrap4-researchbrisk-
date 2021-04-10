import React from 'react'
import { Link } from 'react-router-dom'

export default function postlist(props) {
    return (
        <React.Fragment>
            <div className="postlist">
                <div className="search_posts pt-2 pb-1">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search a post ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <span class="input-group-text primary-color" id="basic-addon2">GO</span>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" >
                    <div className="row no-gutters" style={{ overflow: 'hidden', position: "relative"}}>
                        <div className="col-sm-12 col-md-4" style={{ overflow: 'hidden', position: "relative"}}>
                            <img src="/images/big_blog_01.jpg" alt="..." height="200px"/>
                        </div>
                        <div className="col-sm-12 col-md-8">
                        <div className="card-body">
                            <h6 className="card-title">Card title</h6>
                            <p className="card-text" style={{ overflow: 'hidden',height:"4rem" }}>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <hr/>
                            <div>
                                <Link to="post/3/Why am here" className="btn btn-sm btn-info float-right primary-color"> view </Link>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" >
                    <div className="row no-gutters" style={{ overflow: 'hidden', position: "relative"}}>
                        <div className="col-md-4" style={{ overflow: 'hidden', position: "relative"}}>
                            <img src="/images/big_blog_01.jpg" alt="..." height="200px"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text" style={{ overflow: 'hidden',height:"4rem" }}>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <hr/>
                            <div>
                                <a href="#" className="btn btn-sm btn-info float-right primary-color"> view </a>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" >
                    <div className="row no-gutters" style={{ overflow: 'hidden', position: "relative"}}>
                        <div className="col-md-4" style={{ overflow: 'hidden', position: "relative"}}>
                            <img src="/images/big_blog_01.jpg" alt="..." height="200px"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text" style={{ overflow: 'hidden',height:"4rem" }}>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <hr/>
                            <div>
                                <a href="#" className="btn btn-sm btn-info float-right primary-color"> view </a>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" >
                    <div className="row no-gutters" style={{ overflow: 'hidden', position: "relative"}}>
                        <div className="col-md-4" style={{ overflow: 'hidden', position: "relative"}}>
                            <img src="/images/big_blog_01.jpg" alt="..." height="200px"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text" style={{ overflow: 'hidden',height:"4rem" }}>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <hr/>
                            <div>
                                <a href="#" className="btn btn-sm btn-info float-right"> view </a>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" >
                    <div className="row no-gutters" style={{ overflow: 'hidden', position: "relative"}}>
                        <div className="col-md-4" style={{ overflow: 'hidden', position: "relative"}}>
                            <img src="/images/big_blog_01.jpg" alt="..." height="200px"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text" style={{ overflow: 'hidden',height:"4rem" }}>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <hr/>
                            <div>
                                <a href="#" className="btn btn-sm btn-info float-right"> view </a>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
