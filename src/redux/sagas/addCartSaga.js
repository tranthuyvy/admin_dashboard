import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getAllCartRequest } from '../actions/actions';

function* addCart(action) {
  try {
    const token = localStorage.getItem('token');
    const { product_name, size } = action.payload;

    const body = {
      product_name,
      size,
    };

    const response = yield call(axios.put, 'http://localhost:9999/api/cart/add', body, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    yield put({ type: 'ADD_CART_SUCCESS', payload: response.data });
    yield put(getAllCartRequest());

  } catch (error) {
    yield put({ type: 'ADD_CART_FAILURE', error: error.message });
  }
}

function* putAddCart() {
  yield takeEvery('ADD_CART_REQUEST', addCart);
}

export default putAddCart;