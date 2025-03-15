import { createAction, props } from "@ngrx/store";
import { LoginFailedResponse, LoginSuccessResponse, UserLogin,  } from "../interface";


export const login = createAction('[Auth Login]', props<UserLogin>())
export const loginSuccess = createAction('[Auth Login Success]', props<{auth:LoginSuccessResponse}>())
export const loginFailed = createAction('Auth Login Failed', props<LoginFailedResponse>())