import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getAllCartRequest } from '../actions/actions';

function* addOrder(action) {
  try {
    const token = localStorage.getItem('token');
    const response = yield call(axios.post, 'http://localhost:9999/api/order/create', action.payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      }
    });
    yield put({ type: 'ADD_ORDER_SUCCESS', payload: response.data });
    yield put(getAllCartRequest());

  } catch (error) {
    yield put({ type: 'ADD_ORDER_FAILURE', error: error.message });
  }
}

function* postAddOrder() {
  yield takeEvery('ADD_ORDER_REQUEST', addOrder);
}

export default postAddOrder;