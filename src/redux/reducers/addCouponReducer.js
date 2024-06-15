import { ADD_COUPON_SUCCESS, ADD_COUPON_FAILURE, RESET_ADD_COUPON_STATE } from '../actions/types';

const initialState = {
  message: '',
  status: false,
  code: null,
  error: null,
};

const addCouponReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUPON_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        code: action.payload.code,
        error: null,
      };
    case ADD_COUPON_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case RESET_ADD_COUPON_STATE:
      return initialState;
    default:
      return state;
  }
};

export default addCouponReducer;
