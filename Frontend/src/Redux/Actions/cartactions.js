import axios from 'axios'
import * as action from '../Constants/cartConstants.js'
const url = ''
export const addToCart=(id)=>async (dispatch)=>{
    try{
        const {data}= await axios.get(`${url}/product/${id}`);
        dispatch({type:action.ADDTOCART_SUCCESS,payload:data})
    }
    catch(error){
        console.log("Error while using addToCart API :(")
    }
}

export const removefromcart=(id)=>(dispatch)=>{
    dispatch({type:action.REMOVE_FROM_CART,payload:id})
}