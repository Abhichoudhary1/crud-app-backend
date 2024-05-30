import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getalluser } from '../features/admin/adminSlice'
import Userrow from '../components/Userrow'

const Viewallusers = () => {
  const { users, isLoading } = useSelector((state) => state.admin)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getalluser())
  }, [])

  if (isLoading) {
    return (
      <div className='container p-5'>
        <h1 className='text-center text-secondary'> Loading.... </h1>
      </div>
    )
  }
  return (
    <div className="container p-5">
      <h1 className="display-6 text-center">All Tickets</h1>

      <div className="card p-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Total Tickets</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {
            users.map((user)=>(<Userrow key={user._id} user={user}/>))
          }
        </table>
      </div>
    </div>
  )
}

export default Viewallusers
