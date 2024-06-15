import {
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAILURE
} from '../actions/types';

const initialState = {
  orders: [],
  error: null
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        error: null
      };
    case GET_ALL_ORDERS_FAILURE:
      return {
        ...state,
        orders: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default ordersReducer;
