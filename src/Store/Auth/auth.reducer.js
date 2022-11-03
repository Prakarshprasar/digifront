import { LOGIN, LOGOUT, SIGNUP } from "./auth.type"


let x=JSON.parse(localStorage.getItem("username"))||{};
let obj
if(x.isAuth){
obj={isAuth:x.isAuth,token:""}
}else{
    obj={isAuth:false,token:""}
}


export const authReducer=(state={credArr:[],obj:obj},{type,payload})=>{
switch(type){
    case SIGNUP:{
        state.credArr.push(payload)
        return {
            ...state,
        }
    }
    case LOGIN:{
        return {
            ...state,
            obj:payload
        }
    }
    case LOGOUT:{
        return {
            ...state,
            obj:payload
        }
    }
    default:{
        return state
    }
}
}