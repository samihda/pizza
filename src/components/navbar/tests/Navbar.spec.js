import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';
import MainMenu from '../MainMenu';
import Sequence from '../Sequence';

describe('<Navbar />', () => {
  it('should render MainMenu element at initial state', () => {
    const wrapper = shallow(<Navbar step={0}/>);
    expect(wrapper.find(MainMenu)).to.have.length(1);
  });

  it('should not render MainMenu element at ordering state', () => {
    const wrapper = shallow(<Navbar step={1}/>);
    expect(wrapper.find(MainMenu)).to.have.length(0);
  });

  it('should not render Sequence element at initial state', () => {
    const wrapper = shallow(<Navbar step={0}/>);
    expect(wrapper.find(Sequence)).to.have.length(0);
  });

  it('should render Sequence element at ordering state', () => {
    const wrapper = shallow(<Navbar step={1}/>);
    expect(wrapper.find(Sequence)).to.have.length(1);
  });
});
