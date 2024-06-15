import { all } from 'redux-saga/effects';
import productSaga from './productSaga';
import productsCustomerSaga from './productsCustomerSaga';
import orderSaga from './orderSaga';
import customerSaga from './customerSaga';
import orderDetailSaga from './orderDetailSaga';
import productDetailSaga from './productDetailSaga';
import postAddProduct from './addProductSaga';
import categoriesSaga from './categoriesSaga';
import putUpdateProduct from './updateProductSaga';
import userProfileSaga from './userProfileSaga';
import customerOrdersSaga from './customerOrdersSaga';
import cartSaga from './cartSaga';
import addOrderSaga from './addOrderSaga';
import couponsSaga from './couponsSaga';
import putAddCart from './addCartSaga';
import postAddCoupon from './addCouponSaga';

export default function* rootSaga() {
  yield all([
    productSaga(),
    productsCustomerSaga(),
    orderSaga(),
    customerSaga(),
    orderDetailSaga(),
    productDetailSaga(),
    postAddProduct(),
    categoriesSaga(),
    putUpdateProduct(),
    userProfileSaga(),
    customerOrdersSaga(),
    cartSaga(),
    addOrderSaga(),
    couponsSaga(),
    putAddCart(),
    postAddCoupon(),
  ]);
}
