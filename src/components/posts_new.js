import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
//we will use it to wrap PostsNew component at the bottom
import {createPost} from "../actions/index";
//we imported the action creator and we can use redux form to connect instead of the connect function we did before line 54

class PostsNew extends Component {
    render (){
        const {fields:{title,categories,content},handleSubmit} = this.props;
        //same as const handleSubmit = this.props.handleSubmit
        //const title = this.props.fields.title //and so on
        //these ^ has been injected by redux-form
        //console.log(title);

        return(
            <form onSubmit = {handleSubmit(this.props.createPost)}>
            {/*handleSubmit will call createPost with the contents of the input fields as an object passed on to createPost as a parameter*/}
                <h3>Create a new post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                        {/*if title.touched is true return title.error else return ""*/}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                        {/*if categories.touched is true return categories.error else return ""*/}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                        {/*if content.touched is true return content.error else return ""*/}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values){
    //form validator, prevents submission if invalid
    const errors = {};
    if (!values.title){ //check condition
        errors.title = 'Enter a title';//error message
    }
    if (!values.categories){ //check condition
        errors.categories = 'Enter categories';//error message
    }
    if (!values.content){ //check condition
        errors.content = 'Enter some content';//error message
    }
    return errors;
}


// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps but
//reduxForm: 1st arg is form config, 2nd is mapStateToProps and 3rd is mapDispatchToProps

export default reduxForm({
    form: "PostsNewForm", //just needs to be unique, may not match comp name
    fields: ['title','categories','content'],//tells redux form about the pices of data the form conatins
    validate
},null,{createPost}) (PostsNew);
//user types something in...record it on application state