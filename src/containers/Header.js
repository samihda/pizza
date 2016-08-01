import React from 'react';
import { connect } from 'react-redux';
import { next, reset } from '../actions/step';
import { Navigation, Logo } from '../components/header';

const Header = (props) => (
  <header className={props.step === 0 ? 'translucent' : 'white'}>
    <Logo step={props.step} />
    <Navigation {...props}/>
  </header>
);

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
