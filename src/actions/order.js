export function update(obj) {
  return {
    type: 'UPDATE',
    payload: obj
  };
}

export function reset() {
  return {
    type: 'RESET'
  };
}
