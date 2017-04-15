import React, { Component } from "react";
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//we also dont need the above line
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';
//creates a link from one component to other, see line 19

class PostsIndex extends Component{
    componentWillMount(){
        // console.log('time to call AC')
        this.props.fetchPosts();
    }

    render(){
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                    Add a post
                    </Link>
                </div>
                List of vlog posts
            </div>
        )
    }
}


// function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchPosts},dispatch)
// }
//export default connect(null, mapDispatchToProps)(PostsIndex);
//instead of the function and the connecting we can do the following:

export default connect(null, {fetchPosts})(PostsIndex);
//{fetchPosts} === {fetchPosts:fetchPOsts};