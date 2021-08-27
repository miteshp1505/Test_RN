import * as actionTypes from './actionTypes';

export const createSignUp = payload => {
  return {type: actionTypes.CREATE_SIGNUP, payload: payload};
};
