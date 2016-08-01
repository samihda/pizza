import React from 'react';
import { expect } from 'chai';
import shallow from 'enzyme/shallow';
import CornerButton from '../CornerButton';

describe('<CornerButton />', () => {
  const dummy = () => {};
  const wrapper = shallow(
    <CornerButton step={0} onStartClick={dummy} onCancelClick={dummy} />
  );

  it('should render initial state', () => {
    expect(wrapper.find('button').prop('children')).to.equal(`ORDER TODAY'S MEAL`);
  });

  it('should render finished state', () => {
    wrapper.setProps({ step: 4 });
    expect(wrapper.find('button').prop('children')).to.have.string('ORDER SENT');
  });

  it('should render ordering state', () => {
    wrapper.setProps({ step: 1 });
    expect(wrapper.find('span').prop('children')).to.equal('CANCEL ORDER');
  });
});
