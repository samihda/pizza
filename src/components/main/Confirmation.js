import React from 'react';

const Confirmation = ({ onResetClick, form }) => (
  <main>
    <h1>Thank you for your order, {form.firstName}!</h1>
    <h2>Order is on the way.</h2>
    <button onClick={onResetClick}>
      Close
    </button>
  </main>
);

Confirmation.propTypes = {
  onResetClick: React.PropTypes.func.isRequired,
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
  }).isRequired
};

export default Confirmation;
