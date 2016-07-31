import React from 'react';
import { expect } from 'chai';
import shallow from 'enzyme/shallow';
import OrderButton from '../OrderButton';

describe('<OrderButton />', () => {
  const dummyForm = {
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
  
  const dummyFn = () => {};
  const order = 'SUBMITTING';
  const wrapper = shallow(
    <OrderButton order={order} form={dummyForm} onRequestClick={dummyFn} />
  );

  it(`should render correct button label on 'SUBMITTING' state`, () => {
    const expected = 'Sending...';
    expect(wrapper.find('button').prop('children')).to.equal(expected);
  });

  it(`should render correct button label on 'SUBMITTED' state`, () => {
    wrapper.setProps({ order: 'SUBMITTED' });
    const expected = 'Sent';
    expect(wrapper.find('button').prop('children')).to.equal(expected);
  });

  it(`should render correct button label on 'FAILED' state`, () => {
    wrapper.setProps({ order: 'FAILED' });
    const expected = 'Failed';
    expect(wrapper.find('button').prop('children')).to.equal(expected);
  });

  it(`should render correct button label on 'UNSUBMITTED' state`, () => {
    wrapper.setProps({ order: 'UNSUBMITTED' });
    const expected = 'Make Order';
    expect(wrapper.find('button').prop('children')).to.equal(expected);
  });

  it(`should send the form when clicked`, () => {
    let result;
    const form = { foo: 'bar' };
    const sendForm = (obj) => result = obj;
    const wrapper = shallow(<OrderButton form={form} onRequestClick={sendForm} />);
    wrapper.find('button').simulate('click');
    expect(result).to.eql(form);
  });
});
