import React from 'react'

import AppSideNav from './../dashboard.sidenav';

export default function Archived_orders(props) {
    return (
        <div className=" dashboard-container">
            <div className="row mr-0">
                <div className="col-sm-2 sidenav_dashboard">
                    <AppSideNav />
                </div>

                <div className="col-sm-10">
                    <h2>Archived Orders</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam mollitia nulla sunt ipsa, repellat assumenda voluptatem modi! Deleniti magni similique architecto atque veritatis voluptate ipsum tempora nihil suscipit aut?</p>
                </div>
            </div>
        </div>
    )
}
