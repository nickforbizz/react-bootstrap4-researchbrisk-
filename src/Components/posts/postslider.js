import React from 'react'

export default function postslider(props) {
    let height = props.height;
    return (
        <React.Fragment>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner br-6">
                    <div className="carousel-item active">
                    <img src="/images/blog_grid_05.jpg" className="cover_img" height = {height} className="d-block w-100" alt="/images/blog_grid_05.jpg" />
                    </div>
                    <div className="carousel-item">
                    <img src="/images/big_blog_01.jpg" className="cover_img" height = {height} className="d-block w-100" alt="/images/big_blog_01.jpg" />
                    </div>
                    <div className="carousel-item">
                    <img src="/images/blog_grid_04.jpg" className="cover_img" height = {height} className="d-block w-100" alt="/images/blog_grid_04.jpg" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </React.Fragment>
    )
}
