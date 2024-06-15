import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ALL_PRODUCTS_CUSTOMER_REQUEST
} from '../actions/types';

import {
  getAllProductsCustomerSuccess,
  getAllProductsCustomerFailure,
} from '../actions/actions';

function* getAllProductsCustomerSaga() {
  try {
    const token = localStorage.getItem('token');

    const response = yield call(axios.get, 'http://localhost:9999/api/product/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put(getAllProductsCustomerSuccess(response.data));

  } catch (error) {
    yield put(getAllProductsCustomerFailure(error));
  }
}

export default function* productsCustomerSaga() {
  yield takeLatest(GET_ALL_PRODUCTS_CUSTOMER_REQUEST, getAllProductsCustomerSaga);
}
