import * as actionType from '../Constants/cartConstants'

export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case actionType.ADDTOCART_SUCCESS:
          const item=action.payload;
          const exist=state.cartItems.find(product=>product.id=== item.id);
          if(exist){
          return;
          }
          return {
              ...state,cartItems:[...state.cartItems,item]
          }
         case actionType.REMOVE_FROM_CART:
             return{
                 ...state,cartItems:state.cartItems.filter(p=>p.id !== action.payload)
             }
          default:
          return state;
    }
}