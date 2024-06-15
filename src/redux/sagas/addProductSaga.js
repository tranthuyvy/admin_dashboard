import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addProduct(action) {
  try {
    const token = localStorage.getItem('token');

    const response = yield call(axios.post, 'http://localhost:9999/api/admin/product/add', action.payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      }
    });
    yield put({ type: 'ADD_PRODUCT_SUCCESS', payload: response.data });

  } catch (error) {
    yield put({ type: 'ADD_PRODUCT_FAILURE', error: error.message });
  }
}

function* postAddProduct() {
  yield takeEvery('ADD_PRODUCT_REQUEST', addProduct);
}

export default postAddProduct;