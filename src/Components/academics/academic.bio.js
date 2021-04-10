import React from 'react'
import Navacademics from './nav.academics'

export default function Academicpayrates(props) {
    return (
        <div>

            <div className="m-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="text-muted text-center">Academic Bio</h3> <hr />
                    </div>
                    <div className="col-xs-12 col-md-3 d-none d-md-block">
                        <Navacademics />
                    </div>
                    <div className="col-xs-12 col-sm-9">
                        <p className="text-justify font-weight-light">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum 
                        is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                    </div>

                </div>
                

            </div>
        </div>
    )
}
