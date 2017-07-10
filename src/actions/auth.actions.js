"use strict";
import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_FACEBOOK_ERROR,
  AUTH_TOKEN_LOGIN,
  AUTH_FACEBOOK_LOGOUT,
  AUTH_FACEBOOK_RECEIVE_PROFILE,
  AUTH_FACEBOOK_REQUEST_PROFILE
} from '../constants/actionTypes';

const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://fcc-heroku-rest-api.herokuapp.com'
  : 'http://localhost:8050';

export function authFacebookError(error) {
  return {
    type: AUTH_FACEBOOK_ERROR,
    payload: error
  };
}

export function authTokenLogin(userToken) {
  return {
    type: AUTH_TOKEN_LOGIN,
    payload: {
      token: userToken
    }
  };
}

export function logoutUser() {
  localStorage.removeItem('user_token');
  return {
    type: AUTH_FACEBOOK_LOGOUT
  };
}

export function authFacebookReceiveProfile(data) {
  localStorage.setItem('user_token', data.token);
  return {
    type: AUTH_FACEBOOK_RECEIVE_PROFILE,
    payload: data
  };
}

export function authFacebookRequestProfile() {
  return {
    type: AUTH_FACEBOOK_REQUEST_PROFILE
  };
}

// AJAX call for a secure resource
export function tokenLogin() {
  const userToken = localStorage.getItem('user_token');
  // TODO: Add token timeout check

  return dispatch => {
    dispatch(authTokenLogin(userToken));
    dispatch(authFacebookRequestProfile());
    axios.get(`${API_URL}/me`, {
      headers: { authorization: userToken }
    })
      .then(response => {
        if (response.data && response.data.token) {
          dispatch(authFacebookReceiveProfile(response.data));
          // TODO: Add logic to save the current path when 'login' was clicked
          browserHistory.push('/');
        } else {
          dispatch(authFacebookError('No user found'));
        }
      })
      .catch(err => {
        // If request is bad...
        // Show an error to the user
        dispatch(authFacebookError(err));
      });
  };
}
