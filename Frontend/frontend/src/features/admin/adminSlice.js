import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminService from "../admin/adminService";


const adminSlice = createSlice({
    name :"admin",
    initialState:{
        users:[],
        isLoading:false,
        isError:false,
        isSuccess:false,
        tickets:[],
        ticket:{},
        message:""
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getalluser.pending,(state,action)=>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = ''
        })
        builder.addCase(getalluser.fulfilled,(state,action)=>{
            state.isSuccess = true
            state.isError = false
            state.isLoading = false
            state.message = ''
            state.users = action.payload
        })
        builder.addCase(getalluser.rejected,(state,action)=>{
            state.isLoading = true 
            state.isError =false
            state.isSuccess = false
            state.message = action.payload
            
        })
    }
})

export default adminSlice.reducer

export const getalluser = createAsyncThunk("ADMIN/LOGIN", async(_, thunkAPI)=>{
     const token = thunkAPI.getState().auth.user.token
     try {
        return await adminService.getuser(token)
     } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
     }
})