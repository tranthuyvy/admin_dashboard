import {
  GET_ALL_COUPONS_SUCCESS,
  GET_ALL_COUPONS_FAILURE
} from '../actions/types';

const initialState = {
  coupons: [],
  error: null
};

const couponsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUPONS_SUCCESS:
      return {
        ...state,
        coupons: action.payload,
        error: null
      };
    case GET_ALL_COUPONS_FAILURE:
      return {
        ...state,
        coupons: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default couponsReducer;
