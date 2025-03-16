import { createReducer, on } from "@ngrx/store"
import { login, loginFailed, loginSuccess, signup, signupFailed, signupSuccess } from "./auth.actions"

export const initialvalue = {
    isLoading:false,
    auth:{},
    error:{}
}

export const authReducer = createReducer(initialvalue,

    // login
    on(login, (state)=>({...state})),
    on(loginSuccess, (state,{auth}) => ({...state,auth})),
    on(loginFailed, (state, {error}) => ({...state,error})),


    // signup
    on(signup, (state) => ({...state,isLoading:true})),
    on(signupSuccess, (state,{auth}) => ({...state,isLoading:false,auth})),
    on(signupFailed, (state,{error}) => ({...state,isLoading:false,error}))
    
)