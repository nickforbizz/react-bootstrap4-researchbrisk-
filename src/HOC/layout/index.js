import React from 'react'
import Header from './header'
import Footer from './footer/appFooter'

export default function index(props) {
    return (
        <React.Fragment>
            <Header />

            <div className="mt-5 pt-2">
                {props.children}
            </div>

            <div className="float-right fixed-bottom">

                <a
                    href="https://wa.me/254112252848"
                    className="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                >
                    <i className="fa fa-whatsapp whatsapp-icon"></i>
                </a>
            </div>

            <Footer />
        </React.Fragment>
    )
}
