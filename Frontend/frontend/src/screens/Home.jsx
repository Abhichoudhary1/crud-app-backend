import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
  const{user} = useSelector((state)=>state.auth)
    const isAdmin = !user ? false : user.isAdmin
  return (
    <div className="container p-5">
      <div className="card p-5">
        <h1 className="text-center">welcome </h1> 
        {
        !isAdmin ? (
           <>
           <Link to={"/All-ticket"} className='btn btn-outline-secondary my-2'>view all ticket</Link>
             <Link to={"/new"} className='btn btn-outline-secondary my-2'>create new ticket</Link>
           </>
        ) : (
          <>
          <Link to={"/view-users"} className='btn btn-outline-secondary my-2'>new users</Link>
           <Link to={"/new"} className='btn btn-outline-secondary my-2'>create new ticket</Link>
          </>
        )
        }
             
      </div>

    </div>
  )
}

export default Home
