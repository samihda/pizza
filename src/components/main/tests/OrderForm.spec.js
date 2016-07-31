import React from 'react';
import { expect } from 'chai';
import shallow from 'enzyme/shallow';
import OrderForm from '../OrderForm';

describe('<OrderForm />', () => {
  const dummy = () => {};
  const form = {
    firstName: 'Marcus',
    lastName: 'Müller',
    street: 'Sesamstraße',
    houseNumber: '41',
    postCode: '03123',
    city: 'Berlin',
    ingredients: [],
    size: 30,
    rand: true
  };
  
  const wrapper = shallow(<OrderForm form={form} onNextClick={dummy} updateForm={dummy} />);
  
  it(`should all three size options`, () => {
    expect(wrapper.find(`input[name='size'][type='radio']`)).to.have.length(3);
  });

  it(`should render the selected size option`, () => {
    expect(wrapper.find(
      `input[name='size'][type='radio'][checked=true]`
    ).prop('value')).to.equal(form.size);
  });

  it(`should render the selected size option`, () => {
    expect(wrapper.find(`input#rand`).prop('checked')).to.equal(form.rand);
  });
});
