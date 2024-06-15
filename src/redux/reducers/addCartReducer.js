import { ADD_CART_SUCCESS, ADD_CART_FAILURE, RESET_ADD_CART_STATE } from '../actions/types';

const initialState = {
  message: '',
  status: false,
  code: null,
  error: null,
};

const addCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        code: action.payload.code,
        error: null,
      };
    case ADD_CART_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case RESET_ADD_CART_STATE:
      return initialState;
    default:
      return state;
  }
};

export default addCartReducer;
