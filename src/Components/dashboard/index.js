import React from 'react'


export default function Index(props) {

    return (
        <div>
            <nav class="navbar navbar-dark sticky-top bg-success flex-md-nowrap p-0 shadow">
                <div className="float-right">
                    <button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <ul class="navbar-nav px-3">
                    <li class="nav-item text-nowrap">
                        <a class="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
            </nav>
            <div class="container-fluid">
                <div class="row">
                    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-success sidebar collapse ">
                        <div class="sidebar-sticky pt-3 text-white">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">
                                        Dashboard
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="collapse" href="#collapseExample">
                                        Orders
                                    </a>
                                    <div class="collapse" id="collapseExample">

                                    <ul class="nav flex-column pl-3 b-2">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#">
                                                Add
                                            </a>
                                            <i className="footer-white"></i>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                List
                                            </a>
                                            <i className="footer-white"></i>
                                        </li>

                                    </ul>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Products
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Customers
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Reports
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Integrations
                                    </a>
                                </li>
                            </ul>


                        </div>
                    </nav>

                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Dashboard</h1>
                            <div class="btn-toolbar mb-2 mb-md-0">
                                <div class="btn-group mr-2">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    This week
                                </button>
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </div>
    )
}
