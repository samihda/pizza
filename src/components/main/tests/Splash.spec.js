import React from 'react';
import { expect } from 'chai';
import shallow from 'enzyme/shallow';
import Splash from '../Splash';

describe('<Splash />', () => {
  const dummy = () => false;
  const wrapper = shallow(<Splash onStartClick={dummy} />);
  
  it('should have the title element', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should have the button element', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });
});
