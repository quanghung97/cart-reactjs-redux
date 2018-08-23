import { combineReducers } from 'redux';//combine all reducer(module)
import products from './products';

const appReducers = combineReducers({
    products
});

export default appReducers;
