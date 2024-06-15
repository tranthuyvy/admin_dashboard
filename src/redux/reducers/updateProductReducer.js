import { RESET_UPDATE_PRODUCT_STATE, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE } from '../actions/types';

const initialState = {
  message: '',
  status: false,
  code: null,
  error: null,
};

const updateProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        code: action.payload.code,
        error: null,
      };
    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_UPDATE_PRODUCT_STATE:
      return initialState;
    default:
      return state;
  }
};

export default updateProductReducer;
