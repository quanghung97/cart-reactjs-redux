import { combineReducers } from 'redux';//combine all reducer(module)
import products from './products';
import cart from './cart';

const appReducers = combineReducers({
    products,
    cart
});

export default appReducers;
