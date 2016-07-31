import assign from 'object-assign';

const initialState = {
  size: 30,
  ingredients: [],
  rand: false,
  firstName: '',
  lastName: '',
  street: '',
  houseNumber: '',
  postCode: '',
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
