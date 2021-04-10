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
        console.log(props);
        if(props.isOpen){
            handleShow() 
            
        }else{
            handleClose()
        }
       
    },[props.isOpen]);
    

    return (
        <React.Fragment>
            <div className={ show ? 'modal fade d-block show' : 'modal fade d-none'} tabIndex="-1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={()=>props.close()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            { props.children }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={()=>props.close()}>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
