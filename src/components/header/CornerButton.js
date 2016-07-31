import React from 'react';

const CornerButton = ({ step, onStartClick, onCancelClick }) => {
  switch (step) {
    case 0:
      return (<button onClick={onStartClick}>{`ORDER TODAY'S MEAL`}</button>);
    case 4:
      return (<button>{`ORDER SENT`}</button>);
    default:
      return (<button onClick={onCancelClick}>{`CANCEL ORDER`}</button>);
  }
};

CornerButton.propTypes = {
  step: React.PropTypes.number.isRequired,
  onStartClick: React.PropTypes.func.isRequired,
  onCancelClick: React.PropTypes.func.isRequired,
};

export default CornerButton;
