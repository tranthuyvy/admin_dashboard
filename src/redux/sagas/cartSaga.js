import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_ALL_CART_REQUEST } from '../actions/types';

import { getAllCartSuccess, getAllCartFailure } from '../actions/actions';

function* getAllCartSaga() {
  try {
    const token = localStorage.getItem('token');

    const response = yield call(axios.get, 'http://localhost:9999/api/cart/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put(getAllCartSuccess(response.data));
  } catch (error) {
    yield put(getAllCartFailure(error));
  }
}

export default function* cartSaga() {
  yield takeLatest(GET_ALL_CART_REQUEST, getAllCartSaga);
}
