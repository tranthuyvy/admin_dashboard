import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_CUSTOMER_REQUEST,
  GET_ALL_PRODUCTS_CUSTOMER_SUCCESS,
  GET_ALL_PRODUCTS_CUSTOMER_FAILURE,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAILURE,
  GET_ALL_CUSTOMERS_REQUEST,
  GET_ALL_CUSTOMERS_SUCCESS,
  GET_ALL_CUSTOMERS_FAILURE,
  GET_ORDER_DETAIL_REQUEST,
  GET_ORDER_DETAIL_SUCCESS,
  GET_ORDER_DETAIL_FAILURE,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  RESET_UPDATE_PRODUCT_STATE,
  RESET_ADD_PRODUCT_STATE,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_CUSTOMER_ORDERS_REQUEST,
  GET_CUSTOMER_ORDERS_SUCCESS,
  GET_CUSTOMER_ORDERS_FAILURE,
  GET_ALL_CART_REQUEST,
  GET_ALL_CART_SUCCESS,
  GET_ALL_CART_FAILURE,
  RESET_ADD_ORDER_STATE,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE,
  GET_ALL_COUPONS_REQUEST,
  GET_ALL_COUPONS_SUCCESS,
  GET_ALL_COUPONS_FAILURE,
  RESET_ADD_CART_STATE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  RESET_ADD_COUPON_STATE,
  ADD_COUPON_REQUEST,
  ADD_COUPON_SUCCESS,
  ADD_COUPON_FAILURE,
} from './types';

export const addCouponRequest = (formData) => ({
  type: ADD_COUPON_REQUEST,
  payload: formData,
});

export const addCouponSuccess = (data) => ({
  type: ADD_COUPON_SUCCESS,
  payload: data,
});

export const addCouponFailure = (error) => ({
  type: ADD_COUPON_FAILURE,
  error,
});

export const resetAddCouponState = () => ({
  type: RESET_ADD_COUPON_STATE
});

export const addCartRequest = (payload) => ({
  type: ADD_CART_REQUEST,
  payload
});

export const addCartSuccess = (data) => ({
  type: ADD_CART_SUCCESS,
  payload: data,
});

export const addCartFailure = (error) => ({
  type: ADD_CART_FAILURE,
  error,
});

export const resetAddCartState = () => ({
  type: RESET_ADD_CART_STATE
});

export const getAllCouponsRequest = () => ({
  type: GET_ALL_COUPONS_REQUEST
});

export const getAllCouponsSuccess = (coupons) => ({
  type: GET_ALL_COUPONS_SUCCESS,
  payload: coupons
});

export const getAllCouponsFailure = (error) => ({
  type: GET_ALL_COUPONS_FAILURE,
  payload: error
});

export const getAllCartRequest = () => ({
  type: GET_ALL_CART_REQUEST
});

export const getAllCartSuccess = (cart) => ({
  type: GET_ALL_CART_SUCCESS,
  payload: cart
});

export const getAllCartFailure = (error) => ({
  type: GET_ALL_CART_FAILURE,
  payload: error
});

export const getUserProfileRequest = () => ({
  type: GET_USER_PROFILE_REQUEST
});

export const getUserProfileSuccess = (user) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload: user
});

export const getUserProfileFailure = (error) => ({
  type: GET_USER_PROFILE_FAILURE,
  payload: error
});

export const getAllCategoriesRequest = () => ({
  type: GET_ALL_CATEGORIES_REQUEST
});

export const getAllCategoriesSuccess = (categories) => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  payload: categories
});

export const getAllCategoriesFailure = (error) => ({
  type: GET_ALL_CATEGORIES_FAILURE,
  payload: error
});

export const getAllCustomersRequest = () => ({
  type: GET_ALL_CUSTOMERS_REQUEST
});

export const getAllCustomersSuccess = (customers) => ({
  type: GET_ALL_CUSTOMERS_SUCCESS,
  payload: customers
});

export const getAllCustomersFailure = (error) => ({
  type: GET_ALL_CUSTOMERS_FAILURE,
  payload: error
});

export const getCustomerOrdersRequest = () => ({
  type: GET_CUSTOMER_ORDERS_REQUEST
});

export const getCustomerOrdersSuccess = (customerOrders) => ({
  type: GET_CUSTOMER_ORDERS_SUCCESS,
  payload: customerOrders
});

export const getCustomerOrdersFailure = (error) => ({
  type: GET_CUSTOMER_ORDERS_FAILURE,
  payload: error
});

export const addOrderRequest = (payload) => ({
  type: ADD_ORDER_REQUEST,
  payload
});

export const addOrderSuccess = (data) => ({
  type: ADD_ORDER_SUCCESS,
  payload: data,
});

export const addOrderFailure = (error) => ({
  type: ADD_ORDER_FAILURE,
  error,
});

export const resetAddOrderState = () => ({
  type: RESET_ADD_ORDER_STATE
});

export const getAllOrdersRequest = () => ({
  type: GET_ALL_ORDERS_REQUEST
});

export const getAllOrdersSuccess = (orders) => ({
  type: GET_ALL_ORDERS_SUCCESS,
  payload: orders
});

export const getAllOrdersFailure = (error) => ({
  type: GET_ALL_ORDERS_FAILURE,
  payload: error
});

export const getOrderDetailRequest = (id) => ({
  type: GET_ORDER_DETAIL_REQUEST,
  payload: id
});

export const getOrderDetailSuccess = (orderDetail) => ({
  type: GET_ORDER_DETAIL_SUCCESS,
  payload: orderDetail
});

export const getOrderDetailFailure = (error) => ({
  type: GET_ORDER_DETAIL_FAILURE,
  payload: error
});

export const getAllProductsRequest = () => ({
  type: GET_ALL_PRODUCTS_REQUEST
});

export const getAllProductsSuccess = (products) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: products
});

export const getAllProductsFailure = (error) => ({
  type: GET_ALL_PRODUCTS_FAILURE,
  payload: error
});

export const getAllProductsCustomerRequest = () => ({
  type: GET_ALL_PRODUCTS_CUSTOMER_REQUEST
});

export const getAllProductsCustomerSuccess = (productsCustomer) => ({
  type: GET_ALL_PRODUCTS_CUSTOMER_SUCCESS,
  payload: productsCustomer
});

export const getAllProductsCustomerFailure = (error) => ({
  type: GET_ALL_PRODUCTS_CUSTOMER_FAILURE,
  payload: error
});

export const addProductRequest = (formData) => ({
  type: ADD_PRODUCT_REQUEST,
  payload: formData,
});

export const addProductSuccess = (data) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: data,
});

export const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  error,
});

export const resetAddProductState = () => ({
  type: RESET_ADD_PRODUCT_STATE
});

export const resetUpdateProductState = () => ({
  type: RESET_UPDATE_PRODUCT_STATE
});

export const updateProductRequest = (id, formData) => ({
  type: UPDATE_PRODUCT_REQUEST,
  payload: { id, formData }
});

export const updateProductSuccess = (data) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: data
});

export const updateProductFailure = (error) => ({
  type: UPDATE_PRODUCT_FAILURE,
  error,
});

export const getProductDetailRequest = (id) => ({
  type: GET_PRODUCT_DETAIL_REQUEST,
  payload: id
});

export const getProductDetailSuccess = (productDetail) => ({
  type: GET_PRODUCT_DETAIL_SUCCESS,
  payload: productDetail
});

export const getProductDetailFailure = (error) => ({
  type: GET_PRODUCT_DETAIL_FAILURE,
  payload: error
});