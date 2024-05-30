import React from 'react'

const Userrow = ({user}) => {
  return (
    
       <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <span className="badge rounded-pill text-bg-primary">10</span>
      </td>
      <td>
        <button className="btn btn-sm btn-dark">View</button>
      </td>
    </tr>
    
  )
}

export default Userrow
