import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_ALL_CUSTOMERS_REQUEST } from '../actions/types';

import { getAllCustomersSuccess, getAllCustomersFailure } from '../actions/actions';

function* getAllCustomersSaga() {
  try {
    const token = localStorage.getItem('token');

    const response = yield call(axios.get, 'http://localhost:9999/api/users/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put(getAllCustomersSuccess(response.data));
  } catch (error) {
    yield put(getAllCustomersFailure(error));
  }
}

export default function* customerSaga() {
  yield takeLatest(GET_ALL_CUSTOMERS_REQUEST, getAllCustomersSaga);
}
