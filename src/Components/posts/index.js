import React from 'react'
import Postlist from './postlist'
import PostSlider from './postslider'
import PostHighlight from '../posts/posthighlight'
import Postcategories from '../posts/postcategories'

export default function index(props) {
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
                        <Postlist />
                    </div>
                    <div className="col-sm-4 mt-5">
                        <div className="sticky-top top-nav">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h6 className="primary-color p-3 text-white btr-6">Recent Posts</h6>
                                </div>
                                <PostHighlight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
