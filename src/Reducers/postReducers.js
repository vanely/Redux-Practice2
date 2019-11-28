import {actionTypes} from '../Actions/actions';

const initialState = {
  allPosts: [],
  newPost: {
    id: null,
    title: '',
    body: ''
  },
};

//------------------------------------------------------------------------------
// reducers
export default function postsReducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_POST:
      return {
        ...state,
        allPosts: action.payload,
      }
    case actionTypes.NEW_POST:
      return {
        ...state,
        newPost: action.payload,
      }
    case actionTypes.FORM_FIELD_CHANGE:
      if (state.newPost.id === null) {
        return {
          ...state,
          newPost: {
            ...state.newPost,
            id: action.payload.id,
            [action.payload.field]: action.payload.value,
            [action.payload.field]: action.payload.value,
          }
        }
      }
      return {
        ...state,
        newPost: {
          ...state.newPost,
          [action.payload.field]: action.payload.value,
          [action.payload.field]: action.payload.value,
        }
      }
    case actionTypes.MERGE_AND_CLEAR_FIELDS:
      if((state.newPost.title !== '') && (state.newPost.body !== '')) {
        state.allPosts.unshift(state.newPost);

        return {
          ...state,
          newPost: {
            ...state.newPost,
            id: action.payload.id,
            title: action.payload.title,
            body: action.payload.body
          }
        }
      }
    default:
      return state;
  }
}

// export default function createPostReducer(state = initialState, action) {
//   switch (action) {
//     case actionTypes.FORM_FIELD_CHANGE:
//       if (state.id !== null) {
//         return {
//           ...state,

//           [action.payload.field]: action.payload.value,
//         }
//       } else {
//         return {
//           ...state,
//           id: Math.floor(Math.random() * (300 - 100 + 1)) + 100,
//           [action.payload.field]: action.payload.value
//         }
//       }
//     case actionTypes.CLEAR_FIELDS:
//       return {
//         ...state,
//         id: action.payload.id,
//         title: action.payload.title,
//         body: action.payload.body
//       }
//     default:
//       return state;
//   }
// }