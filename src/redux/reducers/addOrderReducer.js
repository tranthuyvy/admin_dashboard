import { ADD_ORDER_SUCCESS, ADD_ORDER_FAILURE, RESET_ADD_ORDER_STATE } from '../actions/types';

const initialState = {
  message: '',
  status: false,
  code: null,
  error: null,
};

const addOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        code: action.payload.code,
        error: null,
      };
    case ADD_ORDER_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case RESET_ADD_ORDER_STATE:
      return initialState;
    default:
      return state;
  }
};

export default addOrderReducer;
