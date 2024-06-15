import {
  GET_CUSTOMER_ORDERS_SUCCESS,
  GET_CUSTOMER_ORDERS_FAILURE
} from '../actions/types';

const initialState = {
  customerOrders: [],
  error: null
};

const customerOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_ORDERS_SUCCESS:
      return {
        ...state,
        customerOrders: action.payload,
        error: null
      };
    case GET_CUSTOMER_ORDERS_FAILURE:
      return {
        ...state,
        customerOrders: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default customerOrdersReducer;
