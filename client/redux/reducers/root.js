import { combineReducers } from 'redux'
import test from './test'
import { cartReducer } from './cart'

const todoApp = combineReducers({
    test,
    cart: cartReducer,
})

export default todoApp