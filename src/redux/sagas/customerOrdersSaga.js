import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_CUSTOMER_ORDERS_REQUEST
} from '../actions/types';

import {
  getCustomerOrdersSuccess,
  getCustomerOrdersFailure
} from '../actions/actions';

function* getCustomerOrdersSaga() {
  try {
    const token = localStorage.getItem('token');

    const response = yield call(axios.get, 'http://localhost:9999/api/order/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = response.data;
    console.log("data", data)

    yield put(getCustomerOrdersSuccess(response.data));
  } catch (error) {
    yield put(getCustomerOrdersFailure(error));
  }
}

export default function* customerOrdersSaga() {
  yield takeLatest(GET_CUSTOMER_ORDERS_REQUEST, getCustomerOrdersSaga);
}
