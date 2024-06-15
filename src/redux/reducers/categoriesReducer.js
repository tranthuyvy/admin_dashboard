import {
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE
} from '../actions/types';

const initialState = {
  categories: [],
  error: null
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        error: null
      };
    case GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        categories: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default categoriesReducer;
