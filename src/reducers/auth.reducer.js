import initialState from './initialState';
import {
  AUTH_FACEBOOK_REQUEST,
  AUTH_FACEBOOK_SUCCESS,
  AUTH_FACEBOOK_LOGOUT,
  AUTH_FACEBOOK_ERROR,
  AUTH_FACEBOOK_CANCEL,
  AUTH_FACEBOOK_RECEIVE_MESSAGE,
  // AUTH_FACEBOOK_REQUEST_MESSAGE
} from '../constants/actionTypes';

export default function(state = initialState.auth, action) {
  switch(action.type) {
    case AUTH_FACEBOOK_REQUEST:
      return { ...state, isLoggingIn: true };
    case AUTH_FACEBOOK_SUCCESS:
      return { ...state, authenticated: true, user: action.payload.user, error: null, message: null, isLoggingIn: false };
    case AUTH_FACEBOOK_LOGOUT:
      return { ...state, authenticated: false, user: {}, error: null, message: null };
    case AUTH_FACEBOOK_ERROR:
      return { ...state, error: action.payload, message: null, isLoggingIn: false };
    case AUTH_FACEBOOK_CANCEL:
      return { ...state, isLoggingIn: false };
    case AUTH_FACEBOOK_RECEIVE_MESSAGE:
      return { ...state, message: action.payload, error: null };
    default:
      return state;
  }
}
