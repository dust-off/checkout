import { connect } from 'react-redux';
import page0 from './../checkout/page0.jsx';
import { updateName, updatePW, updateEmal } from './../../redux/actions/cart';
// import raw from '../../data/timeData'

var mapStateToProps = (state) => ({
    cart: state.cart,
});

// name: state.cart.name,
// pw: state.cart.pw,
// email: state.cart.email,

var mapDispatchToProps = (dispatch) => ({
    handleNameInputChange: (e) => {
        dispatch(updateName(e.target.value));
    },
    handlePwChange: (e) => {
        dispatch(updatePW(e.target.value));
    },
    handleEmailChange: (e) => {
        dispatch(updateEmal(e.target.value));
    },
});

var page0Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(page0);

export default page0Container;
