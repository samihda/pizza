import fetch from 'isomorphic-fetch';
import { next } from './step';

const endPoint = `http://eu.httpbin.org/post`;

export function ajaxCall(order) {
  return function(dispatch) {
    dispatch(request());

    fetch(endPoint, {
      method: 'POST',
      body: JSON.stringify(order)
    }).then(() => {
      dispatch(success());
      dispatch(next());
    }).catch(() => {
      dispatch(failure());
    });
  };
}

function request() {
  return {
    type: 'REQUEST'
  };
}

function success() {
  return {
    type: 'SUCCESS'
  };
}

function failure() {
  return {
    type: 'FAILURE'
  };
}
