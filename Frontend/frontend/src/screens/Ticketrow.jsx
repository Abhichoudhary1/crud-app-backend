import React from 'react'
import { Link } from 'react-router-dom'
const Ticketrow = ({ticket}) => {
  return (
    
       <tr>
           <td>{new Date(ticket.createdAt).toDateString("en-IN")}</td>
      <td>{ticket.product}</td>
      <td><span class="badge text-bg-success">{ticket.status}</span></td>
      <Link to={`/ticket/${ticket._id}`} className='btn btn-sm btn-dark'>view</Link>


   
    </tr>
    
  )
}

export default Ticketrow
