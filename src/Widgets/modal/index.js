import React, {useState, useEffect} from 'react'

export default function Index(props) {

    const [show, setShow] = useState(props.isOpen);
    

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };

    useEffect(()=>{
        (props.isOpen) ? handleShow() : handleClose() ;
    }); 
    

    return (
        <React.Fragment>
            <div className={ show ? 'modal fade d-block show' : 'modal fade d-none'} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header primary-color">
                            <h5 className="modal-title">{props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={()=>props.close()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">


                            { props.children }

                            
                        </div>
                        <div className="modal-footer primary-color">
                            {/* <button type="button" className="btn btn-secondary" onClick={()=>props.close()}>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button> */}
                            <i className="float-right">At -Research Brisk we offer the best. </i>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
