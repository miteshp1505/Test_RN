import * as actionTypes from '../actions/actionTypes';

const initialstate = {
  data: {},
};

const LoginReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.LOGINDATA:
      return {data: {...state.data, ...action.payload}};
      break;
    case actionTypes.SIGNOUT:
      return {data: action.payload};
      break;
    default:
      break;
  }
  return state;
};

export default LoginReducer;
