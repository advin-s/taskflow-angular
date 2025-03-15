export interface UserLogin{
    email:string,
    password:string
}

export interface LoginSuccessResponse{
    status:string,
    token:string,
}

export interface LoginFailedResponse{
    status:string,
    error:string
}
