import React from 'react';

const OrderButton = ({ onRequestClick, form, order }) => {
  const handleClick = () => {
    onRequestClick(form);
  };

  switch (order) {
    case 'SUBMITTING':
      return (<button className="button-red pure-button">Sending...</button>);
    case 'SUBMITTED':
      return (<button className="button-red pure-button">Sent</button>);
    case 'FAILED':
      return (<button className="button-red pure-button">Failed</button>);
    case 'UNSUBMITTED':
    default:
      return (<button onClick={handleClick} className="button-red pure-button">Make Order</button>);
  }
};

OrderButton.propTypes = {
  onRequestClick: React.PropTypes.func.isRequired,
  form: React.PropTypes.shape({
    size: React.PropTypes.number.isRequired,
    ingredients: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    rand: React.PropTypes.bool.isRequired,
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
    street: React.PropTypes.string.isRequired,
    houseNumber: React.PropTypes.string.isRequired,
    postCode: React.PropTypes.string.isRequired,
    city: React.PropTypes.string.isRequired
  }).isRequired,
  order: React.PropTypes.string.isRequired
};

export default OrderButton;
