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

import Dashboard from "./Components/dashboard";
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

                    <Route  component={appNotFound}/> 

                </Switch>
            </AppLayout>
        </React.Fragment>
    )
}
