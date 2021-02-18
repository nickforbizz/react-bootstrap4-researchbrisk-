import React from 'react'
import { Switch, Route } from 'react-router-dom';


import ProtectedRoute from "./HOC/protectedRoute/protected_route";


// components
import appLogin from './Components/login/login';
import appHome from './Components/home/index'
import appPosts from './Components/posts/index' 
import AppLayout from './HOC/layout/index'
import singlePost from './Components/posts/singlepost'
import orderAssignment from './Components/academics/orderassignment';
import Jobs from './Components/jobs/index';


import AdPlaceOrder from './Components/Dashboard/Academic/place_order';
import AdOrders from './Components/Dashboard/Academic/orders';
import AdArchivedOrders from './Components/Dashboard/Academic/archived_orders';
import AdOrderFormats from './Components/Dashboard/Academic/order_formats';
import AdOrderCats from './Components/Dashboard/Academic/order_cats';
import AdOrderLang from './Components/Dashboard/Academic/order_langs';

import Dashboard from "./Components/Dashboard";
import appNotFound from './Components/NotFound/notfound';

export default function Routes(props) {
    return (
        <React.Fragment>
            <AppLayout {...props}>
                <Switch>
                    <Route path = "/" exact component={appHome}/> 
                    <Route path = "/login" exact component={appLogin}/> 
                    <Route path = "/posts" exact component={appPosts}/> 
                    <Route path = "/post/:id/:title" exact component={singlePost}/> 
                    <Route path = "/orderassignment" exact component={orderAssignment}/> 
                    <Route path = "/jobs" exact component={Jobs}/> 

                    {/* Authorised routes */}
                    <ProtectedRoute exact={true} path="/dashboard" component={Dashboard} />

                    <ProtectedRoute exact={true} path="/adPlace_order" component={AdPlaceOrder} />
                        <ProtectedRoute exact={true} path="/adOrders" component={AdOrders} />
                        <ProtectedRoute exact={true} path="/adArchived_orders" component={AdArchivedOrders} />
                        <ProtectedRoute exact={true} path="/adOrder_formats" component={AdOrderFormats} />
                        <ProtectedRoute exact={true} path="/adOrder_cats" component={AdOrderCats} />
                        <ProtectedRoute exact={true} path="/adOrder_lang" component={AdOrderLang} />
                        {/* <Route exact={true} path="/adOrder_view/:id" component={AdOrderView} /> */}

                    <Route  component={appNotFound}/> 

                </Switch>
            </AppLayout>
        </React.Fragment>
    )
}
