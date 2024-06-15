import { ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, RESET_ADD_PRODUCT_STATE } from '../actions/types';

const initialState = {
  message: '',
  status: false,
  code: null,
  error: null,
};

const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        code: action.payload.code,
        error: null,
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case RESET_ADD_PRODUCT_STATE:
      return initialState;
    default:
      return state;
  }
};

export default addProductReducer;
