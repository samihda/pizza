import React from 'react';

const OrderButton = ({ onRequestClick, form, order }) => {
  const handleClick = () => {
    onRequestClick(form);
  };

  switch (order) {
    case 'SUBMITTING':
      return (<button>Sending...</button>);
    case 'SUBMITTED':
      return (<button>Sent</button>);
    case 'FAILED':
      return (<button>Failed</button>);
    case 'UNSUBMITTED':
    default:
      return (<button onClick={handleClick}>Make Order</button>);
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
