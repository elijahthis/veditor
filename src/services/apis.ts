import axios from "axios"
import { BASE_URL } from "./env"

export const uploadVid = async (payload: FormData)=>{
    try{
    const response = await axios.post(
        `${BASE_URL}/upload`,
        payload
    )
    return response
    }
    catch(err) {
        console.log(err)
        throw err
    }
} 

export const transcodeVid = async (payload: {filename:string; filepath:string; filetype: string})=>{
    try{
    const response = await axios({
        method: 'post', 
        url: `${BASE_URL}/transcode`,
        data: payload,
        responseType: 'blob'
    })
    
    return response
    }
    catch(err) {
        console.log(err)
        throw err
    }
} 

export const trimVid = async (payload: {filename:string; filepath:string; start: number, end:number;})=>{
    try{
    const response = await axios({
        method: 'post', 
        url: `${BASE_URL}/trim`,
        data: payload,
        responseType: 'blob'
    })
    
    return response
    }
    catch(err) {
        console.log(err)
        throw err
    }
} 