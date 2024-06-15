import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ORDER_DETAIL_REQUEST
} from '../actions/types';

import {
  getOrderDetailSuccess,
  getOrderDetailFailure
} from '../actions/actions';

function* getOrderDetailSaga(action) {
  try {
    const id = action.payload;

    const token = localStorage.getItem('token');

    const response = yield call(axios.get, `http://localhost:9999/api/admin/order/${id}/find`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const orderDetail = response.data.data;

    yield put(getOrderDetailSuccess(orderDetail));
  } catch (error) {
    yield put(getOrderDetailFailure(error));
  }
}

export default function* orderDetailSaga() {
  yield takeLatest(GET_ORDER_DETAIL_REQUEST, getOrderDetailSaga);
}
