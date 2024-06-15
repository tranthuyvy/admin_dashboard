import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_ALL_COUPONS_REQUEST } from '../actions/types';
import { getAllCouponsSuccess, getAllCouponsFailure, resetAddCouponState } from '../actions/actions';

function* getAllCouponsSaga() {
  try {
    const token = localStorage.getItem('token');

    const response = yield call(axios.get, 'http://localhost:9999/api/admin/coupon/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put(getAllCouponsSuccess(response.data));
    yield put(resetAddCouponState());
  } catch (error) {
    yield put(getAllCouponsFailure(error));
  }
}

export default function* couponsSaga() {
  yield takeLatest(GET_ALL_COUPONS_REQUEST, getAllCouponsSaga);
}
