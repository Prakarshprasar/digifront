import { ADD_TO_CART, GET_ALL_CART_ITEMS, GET_TEST_ARR, REMOVE_FROM_CART, UPDATE_TEST_ARR } from "./main.type";



export const cartReducer=(state={cart:[],obj:{}},{type,payload})=>{
switch(type){
    case GET_ALL_CART_ITEMS:{
        return {
            ...state,
            cart:payload
        }
    }
    case ADD_TO_CART:{
        state.cart.push(payload);
        return {

            ...state,
            
            
        }
    }
   
    
    default:{
        return state;
    }
}
}