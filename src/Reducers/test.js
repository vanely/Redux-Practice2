const initialState = {
  first: '',
  last: '',
  email: '',
  age: null,
};


const action = {
  payload: {
    field: '',
    value: '',
  }
}

const field1 = 'first';
const value1 = 'Vanely';
function obj(field, value) {
  action.payload.field = field;
  action.payload.value = value;

  initialState[action.payload.field] = action.payload.value;
}

obj(field1, value1);

console.log(initialState);