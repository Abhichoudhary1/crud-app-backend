import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getticket } from '../features/ticket/ticketSlice'

const Singleticket = () => {
  const{ticket} = useSelector((state)=>state.ticket)
  const dispatch = useDispatch()
  const param = useParams()
 
  useEffect(()=>{
     dispatch(getticket(param.id))
  },[])

  return (
    <div>
      <div className="container p-5">
 
      <div className="card p-5">
        <h5>Product Name : {ticket.product}</h5>
        <h5>Description:</h5>
        <h5>
          
          <span className="badge rounded-pill text-bg-primary">{ticket.status}</span>
        </h5>
        
        <h5>ticketID:</h5>
        <h5 className="text-secondary">Date : {new Date(ticket.createdAt).toDateString("en-IN")}</h5>
      </div>
      <button className="btn btn-dark my-3">Add Note</button>
      <h4>Notes :</h4>
      <ul className="my-3 list-group">
        <li className="list-group-item bg-secondary">
          <p className="text-light">User : Please Tell Me Status</p>
        </li>
        <li className="list-group-item">
          <p className="text-secondary">Admin : Sabar Karo!!</p>
        </li>
      </ul>
       {
        ticket.status === 'closed' ? (
<button className="btn btn-danger w-100" disabled>
        Close Ticket
      </button>
        ):(
          <button className="btn btn-danger w-100">
        Close Ticket
      </button>
        )
       }
      
    </div>
    </div>
  )
}

export default Singleticket
