import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk' //Middleware
import {composeWithDevTools} from 'redux-devtools-extension'
import { getProductReducer,getProductDetailsReducer } from './Reducers/productreducer'
import {cartReducer} from './Reducers/cartReducer'
const reducer=combineReducers({
    getProducts:getProductReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer,
})
const middleware=[thunk];
const store=createStore(
   reducer,composeWithDevTools(applyMiddleware(...middleware))

)

export default store;