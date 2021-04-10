import React, { useContext, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Moment from 'react-moment';  

// dependencies 
import { PostContext } from '../../store/context/posts.context'
import  Skeleton from '../../HOC/helpers/skeleton'

import AuthService from '../../HOC/helpers/authservice';
import { authHeader } from '../../HOC/helpers/authheader';

export default function Postlist(props) {
    const meta_posts  = useContext(PostContext);
    useEffect(async () => {
        // call posts
        const fetch_blogs = AuthService.API_URL + 'fetch_blog';
        const headers = authHeader();
        let data = await axios.get(fetch_blogs, {
            headers: headers
          }).catch(err => {
            console.log(err.message)
            meta_posts.dispatchPosts({type:"FAIL", payload: err.message})
          });
          meta_posts.dispatchPosts({type:"SUCCESS", payload: data.data.data})
    }, [])


    //render post card
    const postCard = () => {
        if(meta_posts.posts.payload.length > 0){
            return meta_posts.posts.payload.map((post,i)=>(
                <div className="card mb-3" key={i}>
                    <div className="row no-gutters" style={{ overflow: 'hidden', position: "relative"}}>
                        <div className="col-sm-12 col-md-4 cover_img" style={{ 
                            overflow: 'hidden', 
                            position: "relative", 
                            background: `url('${AuthService.IMG_URL}storage/${post.media_link.replace('public/', '')}')`}}>
                        </div>
                        <div className="col-sm-12 col-md-8">
                        <div className="card-body">
                            <h6 className="card-title"> {post.title} </h6>
                            <p className="card-text" style={{ overflow: 'hidden',height:"4rem" }}>
                                { post.description }
                            </p>
                            <hr/>
                            <div>
                                <Link to={`post/${post.id}/${post.title}`} className="btn btn-sm btn-info float-right primary-color"> view </Link>
                                <p className="card-text"><small className="text-muted">Last updated; <Moment fromNow>{ post.updated_at }</Moment></small></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            ))
        }
    }

    if(meta_posts.posts.loading){
        return (
            <>
            <Skeleton />
            <Skeleton />
           </>
        )
    }

    return (
        <React.Fragment>
            <div className="postlist">
                <div className="search_posts pt-2 pb-1">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search a post ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <span className="input-group-text primary-color" id="basic-addon2">GO</span>
                        </div>
                    </div>
                </div>


                { postCard() }

              
            </div>
        </React.Fragment>
    )
}
