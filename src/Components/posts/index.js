import React from 'react'
// components
import Postlist from './postlist'
import PostSlider from './postslider'
import PostHighlight from '../posts/posthighlight'
import Postcategories from '../posts/postcategories'



export default function Index(props) {

    return (
        <React.Fragment>
           
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 mt-5">
                            <PostSlider height="450px" />
                        </div>
                        <div className="col-sm-4 mt-5">
                            <Postcategories />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-8 mt-5">
                            {/* <h1>{postname} ..</h1> */}
                            <Postlist />
                        </div>
                        <div className="col-sm-4 mt-5">
                            <div className="sticky-top top-nav">
                                <h6 className="primary-color p-3 text-white btr-6">Featured Posts</h6>
                                <PostHighlight />
                            </div>
                        </div>
                    </div>
                </div>
            
        </React.Fragment>
    )
}
