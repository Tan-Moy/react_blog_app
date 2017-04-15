import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
//we will use it to wrap PostsNew component line 13

class PostsNew extends Component {
    render (){
        const {fields:{title,categories,content},handleSubmit} = this.props;
        //same as const handleSubmit = this.props.handleSubmit
        //const title = this.props.fields.title //and so on
        //these ^ has been injected by redux-form
        console.log(title);

        return(
            <form onSubmit = {handleSubmit}>
                <h3>Create a new post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control {...title}"/>
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control {...categories}"/>
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control {...content}"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: "PostsNewForm", //just needs to be unique, may not match comp name
    fields: ['title','categories','content']//tells redux form about the pices of data the form conatins
}) (PostsNew);
//user types something in...record it on application state