export function next() {
  return {
    type: 'NEXT'
  };
}

export function previous() {
  return {
    type: 'PREVIOUS'
  };
}

export function reset() {
  return {
    type: 'RESET'
  };
}
