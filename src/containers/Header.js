import React from 'react';
import { connect } from 'react-redux';
import { next, reset } from '../actions/step';
import { MainMenu, Sequence, CornerButton } from '../components/header';

const Header = (props) => {
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

Header.propTypes = {
  step: React.PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    step: state.step
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: () => {
      dispatch(next());
    },
    onCancelClick: () => {
      dispatch(reset());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
