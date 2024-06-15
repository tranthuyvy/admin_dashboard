import {
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILURE
} from '../actions/types';

const initialState = {
  productDetail: null,
  error: null
};

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: action.payload,
        error: null
      };
    case GET_PRODUCT_DETAIL_FAILURE:
      return {
        ...state,
        productDetail: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default productDetailReducer;
