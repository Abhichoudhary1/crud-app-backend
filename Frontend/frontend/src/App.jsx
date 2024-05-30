import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import Newticket from './screens/Newticket'
import Alltickets from './screens/Alltickets'
import Singleticket from './screens/Singleticket'
import Privateroute from './components/Privateroute';
import PageNotefound from './screens/PageNotefound';
import Viewallusers from './screens/Viewallusers';



const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='*' element={<PageNotefound/>}/>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/Register' element={<Register/>}/>
  
 
        <Route path='new' element={<Newticket/>}/>
        <Route path='/view-users' element={<Viewallusers/>}/>
     
     <Route path='/new-ticket' element={<Newticket/>}/>
     <Route path='/All-ticket' element={<Alltickets/>}/>
     <Route path='/ticket/:id' element={<Singleticket/>}/>
    

     
      </Routes>
<ToastContainer/>
      </Router>
       
      
  
    </div>
  )
}

export default App
