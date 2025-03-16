import { createFeatureSelector, createSelector } from "@ngrx/store"


export interface AuthState{
    isLoading:boolean,
    auth:{
        status:string,
        token:string
    },
    error:{}
}

export const selectAuthFeature = createFeatureSelector<AuthState>('auth')

export const selectAuth = createSelector(
    selectAuthFeature, (state) => state.auth
)

export const selectToken = createSelector(
    selectAuth, (state) => state.token
)