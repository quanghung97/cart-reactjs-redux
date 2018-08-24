import * as types from './../constants/ActionTypes';
import * as Message from './../constants/Message';

var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:

            return [...state];
        default: return [...state];

    }
}

export default message;
