import { combineReducers } from 'redux';//combine all reducer(module)
import products from './products';
import cart from './cart';
import message from './message';

const appReducers = combineReducers({
    products,
    cart,
    message
});

export default appReducers;
