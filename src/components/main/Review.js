import React from 'react';
import OrderButtonContainer from '../../containers/OrderButtonContainer';

const Review = ({ onPrevClick, form }) => {
  const selected = form.ingredients.length > 0 ?
    form.ingredients.join(', ') :
    'None specified';

  return (
    <main>
      <h1>Everything correct?</h1>
      <h2>Your order:</h2>
      <h3>Steinofen-Pizza:</h3>
      <p>1x</p>
      <h3>Pizza size:</h3>
      <p>{form.size} cm</p>
      <h3>Ingredients:</h3>
      <p>{selected}</p>
      <h3>Cheese rand:</h3>
      <p>{form.rand ? 'Yes' : 'No'}</p>
      <h2>Delivery Address:</h2>
      <p>{form.firstName} {form.lastName}</p>
      <p>{form.street}, {form.houseNumber}</p>
      <p>{form.postCode}, {form.city}</p>
      <button onClick={onPrevClick}>
        <span> <img src="/assets/icons/back_arrow.svg" /></span>
        Back
      </button>
      <OrderButtonContainer />
    </main>
  );
};

Review.propTypes = {
  onPrevClick: React.PropTypes.func.isRequired,
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

export default Review;
