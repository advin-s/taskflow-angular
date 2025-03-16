import { createAction, props } from "@ngrx/store";
import { AuthFailedResponse, LoginSuccessResponse, SignupSuccessResponse, UserLogin, UserSignup,  } from "../interface";


export const login = createAction('[Auth Login]', props<UserLogin>())
export const loginSuccess = createAction('[Auth Login Success]', props<{auth:LoginSuccessResponse}>())
export const loginFailed = createAction('Auth Login Failed', props<{error:AuthFailedResponse}>())

export const signup = createAction('[Auth Signup]', props<{signup:UserSignup}>())
export const signupSuccess = createAction('[Auth Signup Success]', props<{auth:SignupSuccessResponse}>())
export const signupFailed = createAction('[Auth Signup Failed]', props<{error:AuthFailedResponse}>())