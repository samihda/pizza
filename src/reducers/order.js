export default function order(state = 'UNSUBMITTED', action) {
  switch (action.type) {
    case 'REQUEST':
      return 'SUBMITTING';
    case 'SUCCESS':
      return 'SUBMITTED';
    case 'FAILURE':
      return 'FAILED';
    case 'RESET':
      return 'UNSUBMITTED';
    default:
      return state;
  }
}
