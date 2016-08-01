import React from 'react';

const CornerButton = ({ step, onStartClick, onCancelClick }) => {
  switch (step) {
    case 0:
      return (<button className="red pure-button button-large" onClick={onStartClick}>ORDER TODAY'S MEAL</button>);
    case 4:
      return (<button className="green pure-button button-large">ORDER SENT</button>);
    default:
      return (
        <button className="red pure-button button-large icon-button" onClick={onCancelClick}>
          <img className="icon-left" src="/assets/icons/cancel_icon.svg" />
          <span>CANCEL ORDER</span>
        </button>
      );
  }
};

CornerButton.propTypes = {
  step: React.PropTypes.number.isRequired,
  onStartClick: React.PropTypes.func.isRequired,
  onCancelClick: React.PropTypes.func.isRequired,
};

export default CornerButton;
