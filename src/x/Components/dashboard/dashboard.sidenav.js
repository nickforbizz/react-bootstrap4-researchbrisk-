import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardSidenav(props) {
    return (
        <>
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-success sidebar collapse ">
                <div class="sidebar-sticky pt-3 text-white sticky-top top-nav">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <Link class="nav-link active" href="dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="collapse" href="#orders">
                                Orders
                                    </a>
                            <div class="collapse" id="orders">

                                <ul class="nav flex-column pl-3 b-2">
                                    <li class="nav-item">
                                        <Link class="nav-link active" to="adOrder_formats">
                                            Formats
                                        </Link>
                                        <i className="footer-white"></i>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" href="adOrder_cats">
                                            Categories
                                        </Link>
                                        <i className="footer-white"></i>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" href="adOrder_lang">
                                            Languages
                                        </Link>
                                        <i className="footer-white"></i>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">
                                Blogs
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">
                                Jobs
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">
                                Settings
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">
                                Logout
                            </Link>
                        </li>
                    </ul>


                </div>
            </nav>

        </>
    )
}
