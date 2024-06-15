import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import productsCustomerReducer from './productsCustomerReducer';
import ordersReducer from './ordersReducer';
import customersReducer from './customersReducer';
import orderDetailReducer from './orderDetailReducer';
import productDetailReducer from './productDetailReducer';
import addProductReducer from './addProductReducer';
import categoriesReducer from './categoriesReducer';
import updateProductReducer from './updateProductReducer';
import userProfileReducer from './userProfileReducer';
import customerOrdersReducer from './customerOrderReducer';
import cartReducer from './cartReducer';
import addOrderReducer from './addOrderReducer';
import couponsReducer from './couponsReducer';
import addCartReducer from './addCartReducer';
import addCouponReducer from './addCouponReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  productsCustomer: productsCustomerReducer,
  orders: ordersReducer,
  customers: customersReducer,
  orderDetail: orderDetailReducer,
  productDetail: productDetailReducer,
  addProduct: addProductReducer,
  categories: categoriesReducer,
  updateProduct: updateProductReducer,
  user: userProfileReducer,
  customerOrders: customerOrdersReducer,
  cart: cartReducer,
  addOrder: addOrderReducer,
  coupons: couponsReducer,
  addCoupon: addCouponReducer,
  addCart: addCartReducer,
});

export default rootReducer;
