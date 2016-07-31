import React from 'react';
import { expect } from 'chai';
import shallow from 'enzyme/shallow';
import Review from '../Review';
import OrderButtonContainer from '../../../containers/OrderButtonContainer';

describe('<Review />', () => {
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
    rand: false
  };

  const wrapper = shallow(<Review onPrevClick={dummy} form={form} />);
  
  it('should contain the OrderButton element', () => {
    expect(wrapper.contains(<OrderButtonContainer />)).to.be.true;
  });
});
