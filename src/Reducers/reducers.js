import {combineReducers} from 'redux';
import postsReducer from './postReducers';
// import createPostReducer from './createPostReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
});

console.log('CombineReducres: ',rootReducer);

export default rootReducer;