import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import adminReducer from '../features/admin/adminSlice'
import ticketReducer from '../features/ticket/ticketSlice'
const store = configureStore({

    reducer:{
        auth : authReducer,
        admin : adminReducer,
        ticket: ticketReducer
    }
  
})

export default store