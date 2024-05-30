import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutuser } from '../features/auth/authSlice'


const Navbar = () => {
   
    const dispatch = useDispatch()
   

    const { user } = useSelector((state) => state.auth)
    const handlelogout = ()=>{
        dispatch(logOutuser())
    }
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand mb-0 h1">support desk</Link>
                    <span>
                        {
                            user ? (
                                <>
                                <button className="btn btn-danger mx-2" onClick={handlelogout} >logout</button>
                                    
                                </>
                            ) :
                            (<>
                             <Link to={"/login"} className="btn btn-success mx-2">login</Link>
                                    <Link to={"/Register"} className="btn btn-warning mx-2">register</Link>
                         </>)
                        } 
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
