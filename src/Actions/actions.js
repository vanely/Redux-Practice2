import {store} from '../index';

export const actionTypes = {
  FETCH_POST: 'FETCH_POST',
  NEW_POST: 'NEW_POST',
  FORM_FIELD_CHANGE: 'FORM_FIELD_CHANGE',
  MERGE_AND_CLEAR_FIELDS: 'MERGE_AND_CLEAR_FIELDS',
  // MERGE_POST: 'MERGE_POST',
};

export const fetchPosts = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then((posts) => dispatch({
      type: actionTypes.FETCH_POST,
      payload: posts
    }))
  .catch(err => console.log(err));
}

export const createPost = (post) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then((posts) => dispatch({
    type: actionTypes.NEW_POST,
    payload: post
  }))
  .catch(err => console.log(err));
}

export const formFieldChange = (field, value) => ({
  type: actionTypes.FORM_FIELD_CHANGE,
  payload: {
    id: Math.floor(Math.random() * (300 - 100 + 1)) + 100,
    field: field,
    value: value,
  }
});

export const mergeAndClearFields = () => ({
  type: actionTypes.MERGE_AND_CLEAR_FIELDS,
  payload: {
    id: null,
    title: '',
    body: '',
  }
});