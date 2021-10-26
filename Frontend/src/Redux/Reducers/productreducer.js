import * as actionType from '../Constants/productconstants'

export const getProductReducer = (state={products:[]}, action) => {
    //state is current state
    switch (action.type) {
        case actionType.GET_PRODUCT_SUCCESS:
            return {
                products: action.payload
            }
        case actionType.GET_PRODUCT_FAIL:
            return {
                error: action.payload
            }
        default:
            return state
    }

}

export const getProductDetailsReducer=(state={product:{}},action)=>{
    switch(action.type){
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return {
                product: action.payload
            }
        case actionType.GET_PRODUCT_DETAIL_FAIL:
            return {
                error: action.payload
            }
        default:
            return state
    }
}