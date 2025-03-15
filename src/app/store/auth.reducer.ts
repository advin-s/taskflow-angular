import { createReducer, on } from "@ngrx/store"
import { login, loginFailed, loginSuccess } from "./auth.actions"

export const initialvalue = {
    isLoading:false,
    auth:{},
    error:{}
}

export const authReducer = createReducer(initialvalue,
    on(login, (state)=>({...state})),
    on(loginSuccess, (state,{auth}) => ({...state,auth})),
    on(loginFailed, (state, {error}) => ({...state,error}))
)