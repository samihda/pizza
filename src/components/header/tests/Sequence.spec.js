import React from 'react';
import { expect } from 'chai';
import shallow from 'enzyme/shallow';
import Sequence from '../Sequence';

describe('<Sequence />', () => {
  it('should contain three list items', () => {
    const wrapper = shallow(<Sequence step={1}/>);
    expect(wrapper.find('li')).to.have.length(4);
  });
});
