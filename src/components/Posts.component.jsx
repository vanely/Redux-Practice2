import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {store} from '../index';
import {fetchPosts} from '../Actions/actions';

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  // listening for changes in newPost state/prop, if it has data, ushift it into posts.
  getDerivedStateFromProps(nextProps) {
    if(nextProps.newPost) {
      console.log('nextProps: ',nextProps.newPost);
      this.props.allPosts.unshift(nextProps.newPost);
    }
  }

  render() {
    console.log('Props: ',this.props)
    console.log('State from Posts: ', store.getState());
    return (
      <div>
        <h1>All Posts</h1>
        <ul>
          {
            this.props.allPosts.map((post) => {
              return (
                <li key={post.id}>
                  <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

// the actions and optionally properties on the state can be out props
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  allPosts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

// mapping actual state to given properties
const mapStateToProps = (state) => ({
  allPosts: state.posts.allPosts,
  newPost: state.posts.newPost,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

// connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component)
export default connect(mapStateToProps, mapDispatchToProps)(Posts);