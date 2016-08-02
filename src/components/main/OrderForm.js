/* eslint-disable react/no-set-state */

import React from 'react';
import assign from 'object-assign';

const sizeOpts = [20, 30, 40];
const ingredientOpts = ['Tomato Sauce', 'Mozzarella', 'Cheese', 'Salami', 'Mushrooms', 'Spinach'];

export default class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.form.size,
      ingredients: props.form.ingredients,
      selectedIngredient: '',
      rand: props.form.rand
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.handleRandChange = this.handleRandChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSizeChange(e) {
    this.setState({ size: e.target.value });
  }

  handleIngredientChange(e) {
    this.setState({ selectedIngredient: e.target.value });
  }

  addIngredient() {
    const state = this.state;
    if (state.selectedIngredient === '') {
      return;
    }
    else if (state.ingredients.find((ing) => ing === state.selectedIngredient)) {
      return;
    }

    const newArr = [...state.ingredients, state.selectedIngredient];
    this.setState({ ingredients: newArr });
  }

  removeIngredient(e) {
    const newArr = this.state.ingredients.slice();
    newArr.splice(newArr.indexOf(e.target.value), 1);
    this.setState({ ingredients: newArr });
  }

  handleRandChange(e) {
    this.setState({ rand: e.target.checked });
  }

  handleSubmit(e) {
    e.preventDefault();
    const obj = assign({}, {
      size: parseInt(this.state.size, 10),
      ingredients: this.state.ingredients,
      rand: this.state.rand
    });

    this.props.updateForm(obj);
    this.props.onNextClick();
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit} className="pure-form pure-form-stacked">
          <div className="paper-white">
            <h1>Your Order</h1>
            <strong>Choose Pizza size in cm</strong>
            <div className="pizza-container">
              {sizeOpts.map((size, i) => (
                <div key={i} className="pizza-child">
                  <label>
                    <input name="size" type="radio" value={size} checked={size == this.state.size} onChange={this.handleSizeChange} />
                    <div className={'pizza-size-' + size}>
                      <strong>{size}</strong>
                    </div>
                  </label>
                </div>
              ))}
            </div>
            <label>
              <strong>Ingredients</strong>
              <div className="pure-g">
                <div className="pure-u-5-6">
                  <select
                    id="ingredients"
                    value={this.state.selectedIngredient}
                    onChange={this.handleIngredientChange}
                    className="pure-input-1"
                  >
                    <option value="">Choose Ingredients</option>
                    {ingredientOpts.map((str, i) => (
                      <option key={i} value={str}>{str}</option>
                    ))}
                  </select>
                </div>
                <div className="pure-u-1-6">
                  <button type="button" onClick={this.addIngredient} className="pure-input-1 plus-button pure-button">
                    <img src="/assets/icons/add_icon.svg" />
                  </button>
                </div>
              </div>
              <div className="ingredient-container">
                {this.state.ingredients.map((ing, i) => (
                  <button type="button" key={i} value={ing} onClick={this.removeIngredient} className="ingredient pure-button">
                    <span>{ing}</span>
                    <img className="icon-right" src="/assets/icons/cancel_small.svg" />
                  </button>
                ))}
              </div>
            </label>
            <label>
              <strong>Cheese rand? </strong>
              <input id="rand" type="checkbox" checked={this.state.rand} onChange={this.handleRandChange} />
              <div className="rand-switch">
                <div className="rand-switch-inner"></div>
              </div>
            </label>
          </div>
          <div className="paper-white">
            <button className="button-red pure-button">
              <span>Next</span>
              <img className="icon-right" src="/assets/icons/next_icon.svg" />
            </button>
          </div>
        </form>
      </main>
    );
  }
}

OrderForm.propTypes = {
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
