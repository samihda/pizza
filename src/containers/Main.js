import React from 'react';
import { connect } from 'react-redux';
import { next, previous, reset } from '../actions/step';
import { update } from '../actions/form';
import { Splash, OrderForm, ContactForm, Review, Confirmation } from '../components/main/';

const Main = (props) => {
  switch (props.step) {
    case 0:
      return (<Splash {...props} />);
    case 1:
      return (<OrderForm {...props} />);
    case 2:
      return (<ContactForm {...props} />);
    case 3:
      return (<Review {...props} />);
    case 4:
      return (<Confirmation {...props} />);
    default:
      return null;
  }
};

Main.propTypes = {
  step: React.PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    step: state.step,
    form: state.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: () => {
      dispatch(next());
    },
    onNextClick: () => {
      dispatch(next());
    },
    onPrevClick: () => {
      dispatch(previous());
    },
    onResetClick: () => {
      dispatch(reset());
    },
    updateForm: (obj) => {
      dispatch(update(obj));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
