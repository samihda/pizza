export default function step(state = 0, action) {
  switch (action.type) {
    case 'NEXT':
      return state + 1;
    case 'PREVIOUS':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}
