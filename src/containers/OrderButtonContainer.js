import { connect } from 'react-redux';
import OrderButton from '../components/main/OrderButton';
import { ajaxCall } from '../actions/order';

const mapStateToProps = (state) => {
  return {
    form: state.form,
    order: state.order
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestClick: (order) => {
      dispatch(ajaxCall(order));
    }
  };
};

const OrderButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderButton);

export default OrderButtonContainer;
