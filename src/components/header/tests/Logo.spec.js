import React from 'react';
import { expect } from 'chai';
import shallow from 'enzyme/shallow';
import Logo from '../Logo';

describe('<Logo />', () => {
  const wrapper = shallow(<Logo step={1}/>);

  it(`should contain the text 'feed.me'`, () => {
    expect(wrapper.find('span').prop('children')).to.equal('feed.me');
  });

  it('should contain an img element', () => {
    expect(wrapper.find('img')).to.have.length(1);
  });
});
