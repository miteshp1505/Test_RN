import * as actionTypes from '../actions/actionTypes';

const initialstate = {
  usersList: [],
};

const SignUpReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.CREATE_SIGNUP:
      return {
        usersList: [...state.usersList, action.payload],
      };
    default:
      break;
  }
  return state;
};

export default SignUpReducer;
