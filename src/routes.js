//tells react-router what urls are valid
//this file also tells react-router what component to render depending on the url/route i.e it houses all mapping of url to components

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app'




export default(
    <Route path='/' component={App}/>
    //map between a route and component, for eg when the user is at "/"(Homepage) path show the component App, also export this so that the router in index.js knows about this mapping. Done on line 18
    //this can have a closing tag instead of self-closing one so that we can nest other routes inside this.
    //nested routes will only be shown on screen if the component App renders {this.props.children} in it return statement as the mested component are passed on to App as children
);
