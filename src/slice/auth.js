import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    loggedIn: false,
    user:null
}

export const authSlice =createSlice({
    name: 'auth',
    initialState,
    reducers:{
        loginAdminStart: state=>{
            state.isLoading = true
        },
        loginAdminSuccess: state=>{},
        loginAdminFailure: state=>{}
    }
})

export const {loginAdminStart} = authSlice.actions
export default authSlice.reducer 