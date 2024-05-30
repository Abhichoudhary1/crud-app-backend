import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketservice from "./ticketService";

const ticketSlice = createSlice({
    name:'ticket',
    initialState:{
        tickets:[],
        ticket:{},
        isLoading:false,
        isError:false,
        isSuccess:false,
        message:''
    },
    reducers:{},
    extraReducers:(builder)=>{
      builder.addCase(gettickets.pending,(state,action)=>{
        state.isError = false
        state.isLoading = true
        state.isSuccess = false
        state.message = ""
      })
      builder.addCase(gettickets.fulfilled,(state,action)=>{
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.message = ""
        state.tickets = action.payload
      })
      builder.addCase(gettickets.rejected,(state,action)=>{
        state.isError = true
        state.isLoading = false
        state.isSuccess = false
        state.message = action.payload
      })
      builder.addCase(getticket.pending,(state)=>{
        state.isError = false
        state.isLoading = true
        state.isSuccess = false
        state.message = ""
      })
      builder.addCase(getticket.fulfilled,(state,action)=>{
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.message = ""
        state.ticket = action.payload
      })
      builder.addCase(getticket.rejected,(state,action)=>{
        state.isError = true
        state.isLoading = false
        state.isSuccess = false
        state.message = action.payload
      })
     
    },
})

export default ticketSlice.reducer

export const gettickets = createAsyncThunk('TICKET/GET', async(_, thunkAPI)=>{
   let token = thunkAPI.getState().auth.user.token

   try {
     return await ticketservice.FetchTickets(token)
   } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
   }
})


export const getticket = createAsyncThunk('TICKET/GETS', async(id, thunkAPI)=>{
  let token = thunkAPI.getState().auth.user.token

  try {
    return await ticketservice.FetchTicket(token,id)
  } catch (error) {
   const message = error.response.data.message
   return thunkAPI.rejectWithValue(message)
  }
})








