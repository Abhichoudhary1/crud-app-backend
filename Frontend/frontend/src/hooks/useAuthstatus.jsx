import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useAuthstatus =()=>{
    const {user} = useSelector((state)=>state.auth)
    const[isloggedin, setIsLoggedin] = useState(false)
    const[checkstatus, setCheckstatus] = useState(true)

    useEffect(()=>{
        if(user){
            setIsLoggedin(true)
        }else{
            setIsLoggedin(false)
        }
        setCheckstatus(false)
    },[user])

   
    return {isloggedin, checkstatus}

}

export default  useAuthstatus