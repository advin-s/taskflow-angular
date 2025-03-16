export interface UserLogin{
    email:string,
    password:string
}

export interface UserSignup{
    name:string,
    email:string,
    password:string,
    confirmPassword:string
}

export interface LoginSuccessResponse{
    status:string,
    token:string,
}

export interface LoginFailedResponse{
    status:string,
    error:string
}
