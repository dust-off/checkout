import { connect } from 'react-redux'
import page1 from '../checkout/page1.jsx'
import { updateAddress, updatePhone } from '../../redux/actions/cart'

const mapStateToProps = (state) => ({
    cart: state.cart,
})

const mapDispatchToProps = (dispatch) => ({
    handleAddressInputChange: (address) => {
        dispatch(updateAddress(address))
    },
    handlePhoneInputChange: (dispatch) => {
        dispatch(updatePhone(e.target.value))
    }
})

var page1Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(page1);

export default page1Container;