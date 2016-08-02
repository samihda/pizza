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
        <form onSubmit={this.handleSubmit} className="pure-form pure-form-stacked">
          <div className="paper-white text-left">
            <h1 className="text-center">Delivery Address</h1>
            <label>
              <strong>FIRST NAME</strong>
              <div className="pure-g">
                <div className="pure-u-1">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    required={true}
                    className="pure-input-1"
                  />
                </div>
              </div>
            </label>
            <label>
              <strong>SURNAME</strong>
              <div className="pure-g">
                <div className="pure-u-1">
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Surname"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    required={true}
                    className="pure-input-1"
                  />
                </div>
              </div>
            </label>
            <label>
              <strong>STREET/NO</strong>
              <div className="pure-g">
                <div className="pure-u-5-6">
                  <input
                    id="street"
                    type="text"
                    placeholder="Street"
                    value={this.state.street}
                    onChange={this.handleChange}
                    required={true}
                    className="pure-input-1"
                  />
                </div>
                <div className="pure-u-1-6">
                  <input
                    id="houseNumber"
                    type="text"
                    placeholder="No."
                    value={this.state.houseNumber}
                    onChange={this.handleChange}
                    required={true}
                    className="pure-input-1"
                  />
                </div>
              </div>
            </label>
            <label>
              <strong>POSTCODE/CITY</strong>
              <div className="pure-g">
                <div className="pure-u-1-3">
                  <input
                    id="postCode"
                    type="text"
                    placeholder="Postcode"
                    value={this.state.postCode}
                    onChange={this.handleChange}
                    required={true}
                    className="pure-input-1"
                  />
                </div>
                <div className="pure-u-2-3">
                  <input
                    id="city"
                    type="text"
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.handleChange}
                    required={true}
                    className="pure-input-1"
                  />
                </div>
              </div>
            </label>
          </div>
          <div className="paper-white container-relative">
            <button type="button" onClick={this.handleReturn} className="pure-button button-previous">
              <img className="icon-left" src={require('../../assets/icons/back_arrow.png')} />
              <span>Back</span>
            </button>
            <button className="button-red pure-button">
              <span>Next</span>
              <img className="icon-right" src={require('../../assets/icons/next_icon.png')} />
            </button>
          </div>
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
