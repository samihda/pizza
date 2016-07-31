import React from 'react';
import { expect } from 'chai';
import shallow from 'enzyme/shallow';
import ContactForm from '../ContactForm';

describe('<ContactForm />', () => {
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
  
  const wrapper = shallow(<ContactForm form={form} onPrevClick={dummy} onNextClick={dummy} updateForm={dummy} />);
  
  it(`should display the user's first name`, () => {
    expect(wrapper.find('#firstName').prop('value')).to.equal(form.firstName);
  });

  it(`should display the user's last name`, () => {
    expect(wrapper.find('#lastName').prop('value')).to.equal(form.lastName);
  });

  it(`should display the user's street`, () => {
    expect(wrapper.find('#street').prop('value')).to.equal(form.street);
  });

  it(`should display the user's house number`, () => {
    expect(wrapper.find('#houseNumber').prop('value')).to.equal(form.houseNumber);
  });

  it(`should display the user's post code`, () => {
    expect(wrapper.find('#postCode').prop('value')).to.equal(form.postCode);
  });

  it(`should display the user's city`, () => {
    expect(wrapper.find('#city').prop('value')).to.equal(form.city);
  });
});
