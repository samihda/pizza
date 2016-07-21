import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CornerButton from '../CornerButton';

describe('<CornerButton />', () => {
  it('should render initial state', () => {
    const button = shallow(<CornerButton step={0}/>).find('button');
    expect(button.prop('children')).to.equal(`ORDER TODAY'S MEAL`);
  });

  it('should render finished state', () => {
    const button = shallow(<CornerButton step={4}/>).find('button');
    expect(button.prop('children')).to.equal('ORDER SENT');
  });

  it('should render ordering state', () => {
    const button = shallow(<CornerButton step={1}/>).find('button');
    expect(button.prop('children')).to.equal('CANCEL ORDER');
  });
});
