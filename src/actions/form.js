export function request() {
  return {
    type: 'REQUEST'
  };
}

export function success() {
  return {
    type: 'SUCCESS'
  };
}

export function failure() {
  return {
    type: 'FAILURE'
  };
}

export function reset() {
  return {
    type: 'RESET'
  };
}
