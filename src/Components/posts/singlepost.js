import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Moment from 'react-moment';  
import ReactHtmlParser from 'react-html-parser'; 
import { Helmet } from 'react-helmet'

import { ToastContainer, toast } from 'react-toastify';
import PostHighlight from '../posts/posthighlight'
import Modal from '../../Widgets/modal/'
import  Skeleton from '../../HOC/helpers/skeleton'

import AuthService from '../../HOC/helpers/authservice';
import { authHeader } from '../../HOC/helpers/authheader';

export default function SinglePost(props) {

    const headers = authHeader();
    const params=useParams()
    const post_id = params.id;
    const [show_modal, setShow_modal] = useState(false);
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);

    useEffect( async () => {
        
        let url_post = AuthService.API_URL + 'get_blog/'+post_id;
        let data = await axios.get(url_post, {
            headers: headers
        }).catch(err => {
            toast.error('Something went wrong')
        });
        
        let post = data.data;
        let _comments = data.data.blogs_comments;
        setPost(post)
        setComments(_comments)
        console.log(comments);

    }, []); 

    // addComment
    const addComment = () => {
        setShow_modal(true)
    }
    // addComment.end
    if (!post) {
        return (
            <>
                <div className="p-2 mt-4">
                    <div className="row">
                        <div className="col-sm-8">
                            <ToastContainer />
                            <Skeleton height="15rem" />
                        </div>

                        <div className="col-sm-4">
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <React.Fragment>
            <Helmet>
                <meta property="og:title" content={`ResearchBrisk || ${ post.blog_category.title }`} data-rh="true" />
                <meta property="og:description" content={post.title} data-rh="true" />
                <meta property="og:image" content={`${AuthService.IMG_URL}storage/${post.media_link.replace('public/', '')}`} data-rh="true" />

                <meta name="title" content={`ResearchBrisk || ${ post.blog_category.title }`} />
                <meta name="description" content={post.title}  data-rh="true"/>

                <meta property="og:url" content="https://researchbrisk.com/"  data-rh="true"/>
                <meta property="og:title" content={`ResearchBrisk || ${ post.blog_category.title }`}  data-rh="true"/>
                <meta property="og:description" content={post.title}  data-rh="true"/>
                <meta property="og:image" content={`${AuthService.IMG_URL}storage/${post.media_link.replace('public/', '')}`}  data-rh="true"/>
                
                <meta property="twitter:card" content="summary_large_image"  data-rh="true"/>
                <meta property="twitter:url" content="https://researchbrisk.com/"  data-rh="true"/>
                <meta property="twitter:title" content={`ResearchBrisk || ${ post.blog_category.title }`}  data-rh="true"/>
                <meta property="twitter:description" content={post.title}  data-rh="true"/>
                <meta property="twitter:image" content={`${AuthService.IMG_URL}storage/${post.media_link.replace('public/', '')}`}  data-rh="true"/>
            </Helmet>
            <div className="p-2 mt-4">
                <div className="row">
                    <div className="col-sm-8">
                        <article>
                        <ToastContainer />

                            <Modal isOpen={show_modal}
                                close={() => setShow_modal(false)}
                                title={'Add Comment'} >

                                <form className="form row">
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Enter name ..." />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" className="form-control" id="email" placeholder="Enter email ..." />
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="msg">Message</label>
                                        <textarea className="form-control" name="message" id="msg" rows="3" placeholder="Type you message ..."></textarea>
                                    </div>
                                </form>

                            </Modal>


                            <div className="container shadow-sm">
                                <div className="nav_article">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item "> <Link to="" className="text-uppercase letter-span"> {post.blog_category.title || "Categoty" }  </Link>  </li>
                                            <li className="breadcrumb-item nav_article-breadcrumb "> <Moment fromNow>{ post.created_at }</Moment> </li>
                                            <li className="breadcrumb-item nav_article-breadcrumb active" aria-current="page">
                                                by: <Link to="" className="text-uppercase letter-span"> {post.user.names || "Guest"} </Link>
                                            </li>
                                        </ol>
                                    </nav>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <h4 className="text-justify text-capitalize mt-2 lh-2"> {post.title} </h4> <hr />
                                    </div>
                                    <div className="col-sm-12">
                                        <figure className="figure w-100">
                                            <img src={`${AuthService.IMG_URL}storage/${post.media_link.replace('public/', '')}`} className="figure-img img-fluid rounded w-100" alt={post.title} />
                                            <figcaption className="figure-caption text-lowercase">{post.title}.</figcaption>
                                        </figure>
                                    </div>

                                    <div className="col-sm-12">
                                        { ReactHtmlParser(post.body)}
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="bootstrap snippets bootdey card mt-5">
                                            <div className="card-img-top">
                                                <button className="btn btn-info float-right" onClick={addComment}>
                                                    <i className="fa fa-plus"></i> Add Comment
                                                </button>
                                                <h3 className="primary-color p-3 text-white btr-6">Comments</h3>
                                                <hr />
                                            </div>


                                            <div className="row p-4">
                                                <div className="col-md-12">
                                                    <div className="blog-comment">
                                                        <ul className="comments card-body">
                                                            <li className="clearfix">
                                                                <img src="https://bootdey.com/img/Content/user_1.jpg" className="avatar" alt="" />
                                                                <div className="post-comments">
                                                                    <p className="meta">Dec 18, 2014 <Link to="/">JohnDoe</Link> says : <i className="pull-right"><Link to="/"><small>Reply</small></Link></i></p>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                        Etiam a sapien odio, sit amet
				                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li className="clearfix">
                                                                <img src="https://bootdey.com/img/Content/user_2.jpg" className="avatar" alt="" />
                                                                <div className="post-comments">
                                                                    <p className="meta">Dec 19, 2014 <Link to="/">JohnDoe</Link> says : <i className="pull-right"><Link to="/"><small>Reply</small></Link></i></p>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                        Etiam a sapien odio, sit amet
				                                                    </p>
                                                                </div>

                                                                <ul className="comments">
                                                                    <li className="clearfix">
                                                                        <img src="https://bootdey.com/img/Content/user_3.jpg" className="avatar" alt="" />
                                                                        <div className="post-comments">
                                                                            <p className="meta">Dec 20, 2014 <Link to="/">JohnDoe</Link> says :</p>
                                                                            <p>
                                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                                Etiam a sapien odio, sit amet
				                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* .container */}
                        </article>
                    </div>
                    <div className="col-sm-4 ">
                        <div className="sticky-top top-nav">
                            <h6 className="p-3 text-white primary-color -bottom-8 btr-6">Featured Posts</h6>
                            <PostHighlight />
                        </div>
                    </div>
                </div>
                {/* .row */}

                <div className="row mt-5 p-4">
                    <div className="col-sm-12">
                        <h6 className="primary-color p-3 text-white btr-6"> You may Also Like </h6>
                    </div>

                    <div className="col-sm-6 col-md-3 mb-5">
                        <div className="card">
                            <img src="/images/blog_grid_03.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5">
                        <div className="card">
                            <img src="/images/blog_grid_03.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5">
                        <div className="card">
                            <img src="/images/blog_grid_03.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5">
                        <div className="card">
                            <img src="/images/blog_grid_03.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5">
                        <div className="card">
                            <img src="/images/blog_grid_02.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-5">
                        <div className="card">
                            <img src="/images/blog_grid_03.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* .row */}
            </div>
        </React.Fragment>
    )
}
