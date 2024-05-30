import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"))
const authSlice = createSlice({


    name: "auth",
    initialState: {
        user: userExist ? userExist : null,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: ""
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginuser.pending, (state, action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message = ""
        })
        builder.addCase(loginuser.fulfilled, (state, action) => {
            state.isError = false
            state.isSuccess = true
            state.isLoading = false
            state.user = action.payload
            state.message = ""
        })
        builder.addCase(loginuser.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isError = false
            state.user = null
            state.message = action.payload
        })
        builder.addCase(logOutuser.fulfilled,(state,action)=>{
            state.isError = false
            state.isLoading = false
            state.isSuccess = true
            state.user = null
            state.message = ""
        })
    }
})

export default authSlice.reducer

export const loginuser = createAsyncThunk("AUTH/LOGIN", async (formdata, thunkAPI) => {
    try {
        return await authService.login(formdata)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const registeruser = createAsyncThunk("AUTH/REGISTER", async(formdata, thunkAPI)=>{
    try {
      return await authService.register(formdata)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const logOutuser = createAsyncThunk("AUTH/LOGOUT", async () => {
    localStorage.removeItem('user')
})
