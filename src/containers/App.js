import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Main from './Main';

const App = (props) => (
  <div className={props.step === 4 ? 'orange-background' : ''}>
    <Header />
    <Main />
  </div>
);

App.propTypes = {
  step: React.PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    step: state.step
  };
};

export default connect(mapStateToProps)(App);
