import {
  GET_ORDER_DETAIL_SUCCESS,
  GET_ORDER_DETAIL_FAILURE
} from '../actions/types';

const initialState = {
  orderDetail: null,
  error: null
};

const orderDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        orderDetail: action.payload,
        error: null
      };
    case GET_ORDER_DETAIL_FAILURE:
      return {
        ...state,
        orderDetail: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default orderDetailReducer;
