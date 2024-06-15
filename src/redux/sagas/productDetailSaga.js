import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_PRODUCT_DETAIL_REQUEST
} from '../actions/types';

import {
  getProductDetailSuccess,
  getProductDetailFailure
} from '../actions/actions';

function* getProductDetailSaga(action) {
  try {
    const id = action.payload;

    const token = localStorage.getItem('token');

    const response = yield call(axios.get, `http://localhost:9999/api/admin/product/find/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const productDetail = response.data;

    yield put(getProductDetailSuccess(productDetail));
  } catch (error) {
    yield put(getProductDetailFailure(error));
  }
}

export default function* productDetailSaga() {
  yield takeLatest(GET_PRODUCT_DETAIL_REQUEST, getProductDetailSaga);
}
