import {actionTypes} from '../Actions/actions';

const initialState = {
  id: null,
  title: '',
  body: '',
};

export default function createPostReducer(state=initialState, action) {
  switch(action) {
    case actionTypes.FORM_FIELD_CHANGE:
      if(state.id !== null) {
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        }
      } else {
        return {
          ...state,
          id: Math.floor(Math.random() * (300 - 100 + 1)) + 100,
          [action.payload.field]: action.payload.value
        }
      }
    case actionTypes.CLEAR_FIELDS:
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body
      }
    default:
      return state;
  } 
}