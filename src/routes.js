import React, { useReducer } from 'react'
import { Switch, Route } from 'react-router-dom';


import ProtectedRoute from "./HOC/protectedRoute/protected_route";
import { PostProvider } from './store/context/posts.context'
import {  PostHighlightProvider } from './store/context/featuredpost.context';

import {PostReducer, postInitialState} from './store/reducers/post.reducer';
import {featuredpostReducer, featuredpostInitialState} from './store/reducers/featuredpost.reducer';


// components
import appLogin from './Components/login/login';
import appHome from './Components/home/index'
import appPosts from './Components/posts/index' 
import AppLayout from './HOC/layout/index'
import singlePost from './Components/posts/singlepost'
import orderAssignment from './Components/academics/orderassignment';
import Jobs from './Components/jobs/index';
// academics 
import Academicbio from './Components/academics/academic.bio';
import Academicpayrates from './Components/academics/academic.payrates';
import Academicservices from './Components/academics/academic.services';
import Academicworksamples from './Components/academics/academic.worksamples';
import Academictestimonials from './Components/academics/academic.testimonials';

import AdPlaceOrder from './Components/dashboard/Academic/place_order';
import AdOrders from './Components/dashboard/Academic/orders';
import AdArchivedOrders from './Components/dashboard/Academic/archived_orders';
import AdOrderFormats from './Components/dashboard/Academic/order_formats';
import AdOrderCats from './Components/dashboard/Academic/order_cats';
import AdOrderLang from './Components/dashboard/Academic/order_langs';

import { Helmet } from 'react-helmet'
import Dashboard from "./Components/dashboard";
import appNotFound from './Components/NotFound/notfound';

export default function Routes(props) {
    const [posts, dispatchPosts] = useReducer(PostReducer, postInitialState);
    const [featuredposts, dispatchFeaturedposts] = useReducer(featuredpostReducer, featuredpostInitialState);
    return (
        <PostProvider value={{ posts, dispatchPosts }}>
            <PostHighlightProvider value = {{
                    featuredposts, dispatchFeaturedposts
                }}>

                    <React.Fragment>

                        <AppLayout {...props}>
                            <Helmet>
                                <meta property="og:title" content="ResearchBrisk." data-rh="true" />
                                <meta property="og:description" content="Get your paper in hours, avoid the hustle of writing your academic paper. At researchBrisk we've got your back. Get updates on whats happenning on our posts." data-rh="true" />
                                <meta property="og:image" content="/public/images/blog_content.png" data-rh="true" />
                            </Helmet>
                            <Switch>
                                <Route path = "/" exact component={appHome}/> 
                                <Route path = "/login" exact component={appLogin}/> 
                                <Route path = "/posts" exact component={appPosts}/> 
                                <Route path = "/post/:id/:title" exact component={singlePost}/> 
                                <Route path = "/orderassignment" exact component={orderAssignment}/> 
                                <Route path = "/jobs" exact component={Jobs}/> 
                                {/* academics */}
                                <Route path = "/academicbio" exact component={Academicbio}/> 
                                <Route path = "/academicpayrates" exact component={Academicpayrates}/> 
                                <Route path = "/academicservices" exact component={Academicservices}/> 
                                <Route path = "/academicworksamples" exact component={Academicworksamples}/> 
                                <Route path = "/academictestimonials" exact component={Academictestimonials}/> 

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
                
            </PostHighlightProvider>
        </PostProvider>
    )
}
