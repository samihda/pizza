import React from 'react';

const Confirmation = ({ onResetClick, form }) => (
  <main>
    <div className="paper-white">
      <h1>Thank you for your order, {form.firstName}!</h1>
      <strong>Order is on the way.</strong>
    </div>
    <div className="paper">
      <button className="button-red pure-button" onClick={onResetClick}>
        Close
      </button>
    </div>
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
