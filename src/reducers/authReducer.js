/* eslint-disable import/prefer-default-export */
import {
  AUTH_USER_START,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAIL,
  LOGOUT_USER,
} from '../actions/auth';

const initialState = {
  userLoader: false,
  userError: null,
  authData: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER_START:
      return {
        ...state,
        userLoader: true,
      };
    case AUTH_USER_SUCCESS:
      localStorage.setItem(
        'loggedUser',
        JSON.stringify({ ...action?.payload })
      );
      return {
        ...state,
        authData: action.payload,
        userLoader: false,
        userError: null,
      };
    case AUTH_USER_FAIL:
      return {
        ...state,
        userError: action.payload,
        userLoader: false,
      };
    case LOGOUT_USER:
      window.localStorage.clear();
      window.localStorage.removeItem('loggedUser');
      return {
        ...state,
        authData: null,
        userLoader: false,
        userError: null,
      };
    default:
      return state;
  }
};
