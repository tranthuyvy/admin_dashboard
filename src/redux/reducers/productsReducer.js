import {
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE
} from '../actions/types';

const initialState = {
  products: [],
  error: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: null
      };
    case GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;
