import React from 'react'
import useAuthstatus from '../hooks/useAuthstatus'
import { Navigate, Outlet } from 'react-router-dom'

const Privateroute = () => {
    const {isloggedin, checkstatus} = useAuthstatus()
    if(checkstatus){
        return(
            <div className='container p-5'>
                <h1 className='text-center text-secondary'>Loading....</h1>
            </div>
        )
      
    }

    isloggedin ? <Outlet/> : <Navigate to={"/login"}/>
}

export default Privateroute
