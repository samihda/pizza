import assign from 'object-assign';

const initialState = {
  size: 0,
  ingredients: [],
  rand: false,
  firstName: '',
  lastName: '',
  street: '',
  houseNumber: 0,
  postCode: 0,
  city: ''
};

export default function order(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE':
      return assign({}, state, action.payload);
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
