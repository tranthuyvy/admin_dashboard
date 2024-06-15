import {
  GET_ALL_CUSTOMERS_SUCCESS,
  GET_ALL_CUSTOMERS_FAILURE
} from '../actions/types';

const initialState = {
  customers: [],
  error: null
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customers: action.payload,
        error: null
      };
    case GET_ALL_CUSTOMERS_FAILURE:
      return {
        ...state,
        customers: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default customersReducer;
