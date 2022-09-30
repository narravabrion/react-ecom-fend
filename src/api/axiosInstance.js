import axios from "axios"

const baseURL = "http://127.0.0.1:8000/api/v1"

export const axiosPrivate = axios.create({
    baseURL:baseURL,
    withCredentials:true,
})

// export const axiosInstance = axios.create({
//     baseURL:baseURL,
// })

