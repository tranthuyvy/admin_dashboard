import {
  GET_ALL_PRODUCTS_CUSTOMER_SUCCESS,
  GET_ALL_PRODUCTS_CUSTOMER_FAILURE
} from '../actions/types';

const initialState = {
  productsCustomer: [],
  error: null
};

const productsCustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_CUSTOMER_SUCCESS:
      return {
        ...state,
        productsCustomer: action.payload,
        error: null
      };
    case GET_ALL_PRODUCTS_CUSTOMER_FAILURE:
      return {
        ...state,
        productsCustomer: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default productsCustomerReducer;
