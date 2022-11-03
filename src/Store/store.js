import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { cartReducer } from "./Main/main.reducer";




const rootReducer = combineReducers({
   auth:authReducer,
   cart:cartReducer
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));