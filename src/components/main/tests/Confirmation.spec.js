import React from 'react';
import { expect } from 'chai';
import shallow from 'enzyme/shallow';
import Confirmation from '../Confirmation';

describe('<Confirmation />', () => {
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
  
  const dummy = () => {};
  const wrapper = shallow(<Confirmation form={form} onResetClick={dummy} />);
  
  it(`should display the user's first name`, () => {
    expect(wrapper.find('h1').text()).to.have.string(form.firstName);
  });
});
