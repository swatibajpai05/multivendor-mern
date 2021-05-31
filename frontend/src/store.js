import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer,
   productCreateReducer, productUpdateReducer,
    productDeleteReducer, 
    productCategoryListReducer,
    productReviewCreateReducer} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

// import { userSigninReducer } from './reducers/userReducers';
import {
  userRegisterReducer,
userSigninReducer,
userDetailsReducer,
userUpdateProfileReducer,
userDeleteReducer,
userListReducer,
userUpdateReducer,
userTopSellerListReducer,
userAddressMapReducer,
} from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer , orderMineListReducer, orderListReducer, orderDeleteReducer,orderDeliverReducer, orderSummaryReducer} from './reducers/orderReducers';
// import data from './data'admin@example.com
// const initialState = {};
const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
    cart: {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
      paymentMethod: 'PayPal',
    },
  };
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  orderDeliver: orderDeliverReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userTopSellersList: userTopSellerListReducer,
  productCategoryList: productCategoryListReducer,
  productReviewCreate: productReviewCreateReducer,
  userAddressMap: userAddressMapReducer,
  orderSummary:orderSummaryReducer
  
});

  //to put data in chrome extension
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;