import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import AllPosts from './AllPosts'
import RecentPosts from './RecentPosts'
import PopularPosts from './PopularPosts'
import AboutUs from './AboutUs'
import Footer from './Footer';
import Post from './Post'


function MainPage() {
    return (
        <div id="main-page">
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={AllPosts} />
            <Route path="/recent-posts" component={RecentPosts} />
            <Route path="/popular-posts" component={PopularPosts} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/posts/:id" render={(globalProps) => <Post globalProps={globalProps} /> } />
            </Switch>
            <Footer />
        </div>
    )
}
export default MainPage
