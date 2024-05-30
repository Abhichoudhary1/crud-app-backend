import axios from "axios"

const API_URL = "/api/ticket"

const FetchTickets = async(token)=>{
    const option = {
        headers:{
            authorization:
                `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL ,option)
    return response.data
}

const FetchTicket = async(token, id)=>{
    console.log(token,id)
    const option = {
        headers:{
            authorization:
                `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + "/" + id ,option)
    return response.data
}


const ticketservice = {
    FetchTickets,
    FetchTicket
    
}

export default ticketservice