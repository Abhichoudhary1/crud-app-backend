import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import {  gettickets } from '../features/ticket/ticketSlice'
import Ticketrow from './Ticketrow'


const Alltickets = () => {
  const dispatch = useDispatch()

  const{tickets,isLoading,isError,isSuccess,message}= useSelector((state)=>state.ticket)

  
   
  useEffect(()=>{
    dispatch(gettickets())
  },[])


  return (
    <div className='container p-5'>
       <h1 className='text-center'>all tickets</h1>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">product</th>
      <th scope="col">Date</th>
      <th scope="col">status</th>
    </tr>
  </thead>
  <tbody>
    {
      tickets.map((ticket)=>(<Ticketrow key={ticket._id} ticket={ticket}/>)  )
    }
   
    
   
  </tbody>
</table>
    </div>
  )
}

export default Alltickets
