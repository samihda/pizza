import React from 'react';
import MainMenu from './MainMenu';
import Sequence from './Sequence';
import CornerButton from './CornerButton';

const Navbar = (props) => {
  const Empty = () => null;
  const logo = "/assets/logo/feedme_logo.svg";
  const logoWhite = "/assets/logo/feedme_logo_white.svg";

  return (
    <header className={props.step === 0 ? 'translucent' : 'white'}>
      <a href="#">
        <img src={props.step === 0 ? logoWhite : logo} alt="logo" />
        <span>{'feed.me'}</span>
      </a>
      {props.step === 0 ? <MainMenu /> : <Empty />}
      {props.step === 0 || props.step === 4 ? <Empty /> : <Sequence step={props.step}/>}
      <CornerButton {...props}/>
    </header>
  );
};

Navbar.propTypes = {
  step: React.PropTypes.number.isRequired
};

export default Navbar;
