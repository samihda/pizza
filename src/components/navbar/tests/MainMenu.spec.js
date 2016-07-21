import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MainMenu from '../MainMenu';

describe('<MainMenu />', () => {
  it('should contain three list items', () => {
    const wrapper = shallow(<MainMenu />);
    expect(wrapper.find('li')).to.have.length(3);
  });
});
