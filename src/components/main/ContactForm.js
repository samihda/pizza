/* eslint-disable react/no-set-state */

import React from 'react';
import assign from 'object-assign';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.form.firstName,
      lastName: props.form.lastName,
      street: props.form.street,
      houseNumber: props.form.houseNumber,
      postCode: props.form.postCode,
      city: props.form.city
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleReturn() {
    const obj = assign({}, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      street: this.state.street,
      houseNumber: this.state.houseNumber,
      postCode: this.state.postCode,
      city: this.state.city
    });

    this.props.updateForm(obj);
    this.props.onPrevClick();
  }

  handleSubmit(e) {
    e.preventDefault();
    const obj = assign({}, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      street: this.state.street,
      houseNumber: this.state.houseNumber,
      postCode: this.state.postCode,
      city: this.state.city
    });

    this.props.updateForm(obj);
    this.props.onNextClick();
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <h1>Delivery Address</h1>
          <label>
            FIRST NAME
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
              required={true}
            />
          </label>
          <label>
            SURNAME
            <input
              id="lastName"
              type="text"
              placeholder="Surname"
              value={this.state.lastName}
              onChange={this.handleChange}
              required={true}
            />
          </label>
          <label>
            STREET/NO
            <input
              id="street"
              type="text"
              placeholder="Street"
              value={this.state.street}
              onChange={this.handleChange}
              required={true}
            />
            <input
              id="houseNumber"
              type="text"
              placeholder="No."
              value={this.state.houseNumber}
              onChange={this.handleChange}
              required={true}
            />
          </label>
          <label>
            POSTCODE/CITY
            <input
              id="postCode"
              type="text"
              placeholder="Postcode"
              value={this.state.postCode}
              onChange={this.handleChange}
              required={true}
            />
            <input
              id="city"
              type="text"
              placeholder="City"
              value={this.state.city}
              onChange={this.handleChange}
              required={true}
            />
          </label>
          <button type="button" onClick={this.handleReturn}>
            <span><img src="/assets/icons/back_arrow.svg" /> </span>
            Back
          </button>
          <button>
            Next
            <span> <img src="/assets/icons/next_icon.svg" /></span>
          </button>
        </form>
      </main>
    );
  }
}

ContactForm.propTypes = {
  onPrevClick: React.PropTypes.func.isRequired,
  onNextClick: React.PropTypes.func.isRequired,
  updateForm: React.PropTypes.func.isRequired,
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
