import axios from "axios"
const API_URL = '/api/admin'
const getuser = async(token)=>{
    
    const option = {
         headers :{
             authorization: `Bearer ${token}` 
         }
    }
    const response = await axios.get(API_URL + '/users', option)
    return response.data
}

const adminService = {
    getuser
}

export default adminService