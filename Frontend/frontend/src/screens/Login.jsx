import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginuser } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  })

  const { email, password } = formdata
  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    dispatch(loginuser(formdata))
  }

  useEffect(() => {
    if (isError || message) {
      toast.error(message)
    }

    if (user) {
      navigate("/")
    }
  }, [isError, message, user])

  if (isLoading) {
    return (
      <div className='container p-5'>
        <h1 className='text-center text-secondary'>...Loading</h1>
      </div>
    )
  }
  return (
    <div className="container p-5">
      <h1 className="text-center">Login</h1>
      <div className="card p-5 ">
        <form className='my-3' onSubmit={handlesubmit} >
          <input type="text" placeholder='enter email' className='my-2 form-control' value={email} name='email' required onChange={handlechange} />
          <input type="text" placeholder='enter password' className='my-2 form-control' value={password} name='password' required onChange={handlechange} />
          <button className="btn btn-success w-100">login</button>
        </form>

      </div>
    </div>
  )
}

export default Login
