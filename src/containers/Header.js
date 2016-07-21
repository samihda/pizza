import { connect } from 'react-redux';
import { Navbar } from '../components/navbar';
import { next, reset } from '../actions/step';

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

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export default Header;
