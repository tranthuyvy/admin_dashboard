import {
  GET_ALL_CART_SUCCESS,
  GET_ALL_CART_FAILURE
} from '../actions/types';

const initialState = {
  cart: [],
  error: null
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        error: null
      };
    case GET_ALL_CART_FAILURE:
      return {
        ...state,
        cart: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
