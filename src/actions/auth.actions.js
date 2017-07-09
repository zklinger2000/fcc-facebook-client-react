import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_FACEBOOK_REQUEST,
  AUTH_FACEBOOK_SUCCESS,
  AUTH_FACEBOOK_ERROR,
  AUTH_FACEBOOK_LOGOUT,
  AUTH_FACEBOOK_CANCEL,
  AUTH_FACEBOOK_RECEIVE_MESSAGE,
  AUTH_FACEBOOK_REQUEST_MESSAGE
} from '../constants/actionTypes';

const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://fcc-heroku-rest-api.herokuapp.com'
  : 'http://localhost:8050';

export function authFacebookRequest() {
  return {
    type: AUTH_FACEBOOK_REQUEST,
    payload: { // not hooked up right now
      timestamp: Date.now()
    }
  };
}

export function authFacebookSuccess(data) {
  return {
    type: AUTH_FACEBOOK_SUCCESS,
    payload: {
      user: data.user
    }
  };
}

export function authFacebookCancel() {
  return {
    type: AUTH_FACEBOOK_CANCEL
  };
}

export function authFacebookLogin(response) {
  return dispatch => {
    // Start Facebook auth process
    return axios.post(`${API_URL}/auth/facebook/login`, response)
      .then(response => {
        // If request is good...
        // Update state to indicate user is authenticated
        // console.log(response.data);
        dispatch(authFacebookSuccess(response.data));
        // TODO: Add token timeout data
        // TODO: Save the JWT token and User name locally
        // localStorage.setItem('user_token', response.data.token);
        // localStorage.setItem('user_name', response.data.user.name);
        // Redirect back to 'home' route
        browserHistory.push('/');
      })
      .catch(() => {
        // If request is bad...
        // Show an error to the user
        dispatch(authFacebookError('Bad Login Info'));
      });
  };
}

export function authFacebookError(error) {
  return {
    type: AUTH_FACEBOOK_ERROR,
    payload: error
  };
}

// TODO: Add token timeout data
export function logoutUser() {
  localStorage.removeItem('user_token');
  localStorage.removeItem('user_name');
  return {
    type: AUTH_FACEBOOK_LOGOUT
  };
}

function authFacebookReceiveMessage(message) {
  return {
    type: AUTH_FACEBOOK_RECEIVE_MESSAGE,
    payload: message
  };
}

function authFacebookRequestMessage() {
  return {
    type: AUTH_FACEBOOK_REQUEST_MESSAGE
  };
}

// AJAX call for a secure resource
export function fetchMe(token) {
  return dispatch => {
    dispatch(authFacebookRequestMessage());
    axios.get(`${API_URL}/me`, {
      // headers: { authorization: localStorage.getItem('user_token') }
      headers: { authorization: token }
    })
      .then(response => {
        dispatch(authFacebookReceiveMessage(response.data.message));
      });
  };
}
