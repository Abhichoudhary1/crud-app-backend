import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registeruser } from '../features/auth/authSlice'





const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user,isSuccess,isError,message} = useSelector((state)=>state.auth)
  const [formdata, setFromdata] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  })
  const { name, email, password, password2 } = formdata

  const handlechange = (e) => {
    setFromdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    dispatch(registeruser(formdata))
    
  }
  // useEffect(()=>{
  //   if(user){
  //   navigate('/')
  //   }
  // },[user])

  return (
    <div>
      <div className="container p-5">
        <h1 className="text-center">Register</h1>
        <div className="card p-5 ">
          <form className='my-3' onSubmit={handlesubmit} >
            <input type="text" placeholder='enter name' className='my-2 rounded-0 form-control' name='name' value={name} onChange={handlechange} />
            <input type="text" placeholder='enter email' className='my-2 rounded-0 form-control' name='email' value={email} onChange={handlechange} />
            <input type="text" placeholder='enter password' className='my-2 rounded-0 form-control' name='password' value={password} onChange={handlechange} />
            <input type="text" placeholder='confirm password' className='my-2 rounded-0 form-control' name='password2' value={password2} onChange={handlechange} />
            <button className="btn btn-success w-100">Register</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Register
