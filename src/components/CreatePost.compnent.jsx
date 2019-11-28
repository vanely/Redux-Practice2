import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {store} from '../index';
import {
  createPost,
  formFieldChange,
  mergeAndClearFields,
} from '../Actions/actions';

class CreatePost extends React.Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.createPost(this.props.newPost);
    this.props.mergeAndClearFields();
  }
  
  handleChange = (e) => {
    console.log(e.target.value);
    console.log('Post', this.props.newPost)
    this.props.formFieldChange(e.target.name, e.target.value);
  }
  
  render() {
    console.log(this);
    console.log('State from CreatePost: ', store.getState());
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input onChange={this.handleChange} name="title" type="text" value={this.props.newPost.title}/>
          </label><br />
          <label>
            Body:
            <input onChange={this.handleChange} name="body" type="text" value={this.props.newPost.body}/>
          </label><br />

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

CreatePost.propTypes = {
  formFieldChange: PropTypes.func,
  mergeAndClearFields: PropTypes.func.isRequired,
  newPost: PropTypes.object,
  createPost: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  newPost: state.posts.newPost,
});

const mapDispatchToProps = (dispatch) => ({
  formFieldChange: (field, value) => {
    dispatch(formFieldChange(field, value));
  },
  mergeAndClearFields: () => {
    dispatch(mergeAndClearFields());
  },
  createPost: (post) => dispatch(createPost(post)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);