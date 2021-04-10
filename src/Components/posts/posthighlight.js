import React, { useContext, useEffect } from 'react'
import axios from 'axios';

import AuthService from '../../HOC/helpers/authservice';
import { authHeader } from '../../HOC/helpers/authheader';
import {  PostHighlightContext } from '../../store/context/featuredpost.context';
import  Skeleton from '../../HOC/helpers/skeleton'
import { Link } from 'react-router-dom';

export default function Posthighlight(props) {
    // featured post reducer here  
    const meta_postshighlight  = useContext(PostHighlightContext); 
    useEffect(async () => {
        // call posts
        const fetch_posts = AuthService.API_URL + 'fetch_blog';
        const headers = authHeader();
        let dataposts = await axios.get(fetch_posts, {
            headers: headers
        }).catch(err => {
            console.log(err.message)
            meta_postshighlight.dispatchFeaturedposts({type:"FAIL", payload: err.message})
        });
        meta_postshighlight.dispatchFeaturedposts({type:"SUCCESS", payload: dataposts.data.data})
    }, [])


    //render post card
    const postCard = () => {
        if(meta_postshighlight.featuredposts.payload.length > 0){
            return meta_postshighlight.featuredposts.payload.map((post,i)=>(
                <div className="col-sm-12 p-0" key={i}>
                    <div className="card mb-1" >
                        <div className="row no-gutters" style={{ overflow: 'hidden', position: "relative"}}>
                            <div className="col-sm-12 col-md-4 cover_img" style={{
                                overflow: 'hidden', 
                                position: "relative", 
                                background: `url('${AuthService.IMG_URL}storage/${post.media_link.replace('public/', '')}')`}}>
                            </div>
                            <div className="col-sm-12 col-md-8">
                            <div className="card-body">
                                <Link to={`post/${post.id}/${post.title.replace(/ /g, "_")}`} className="card-title text-dark" style={{ fontSize: 'small', fontWeight: 'bold' }}> {post.title} </Link>
                                <p className="card-text" style={{ overflow: 'hidden',height:"2rem", fontSize: 'small' }}>
                                    { post.description }
                                </p>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }}

        
    // check if there are featured posts
    if(meta_postshighlight.featuredposts.loading && !meta_postshighlight.featuredposts.error){
        console.log(meta_postshighlight.featuredposts.error);
        return (
            <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </>
        )
    }
    return (
        <React.Fragment>

            { postCard() }

        </React.Fragment>
    )
}
