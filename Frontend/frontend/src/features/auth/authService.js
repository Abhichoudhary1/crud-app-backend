import axios from "axios"

const API_URL = "/api/user"

const login = async(formdata)=>{

    const response = await axios.post(API_URL + '/login', formdata)
    localStorage.setItem("user", JSON.stringify(response.data))
    return response.data
}

const register = async(formdata)=>{
    const response = await axios.post(API_URL + '/', formdata)
    localStorage.setItem("user", JSON.stringify(response.data))
    return response.data
}

const authService = {
    login,
    register
}


export default authService