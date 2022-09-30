import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
import { axiosPrivate } from "../../api/axiosInstance"

export const registerUser = createAsyncThunk(
	"user/register",
	async (userData, { rejectWithValue }) => {
		try {
			await axios.post("url", userData)
		} catch (error) {
			rejectWithValue(error.response?.data.message)
		}
	}
)

export const login = createAsyncThunk(
	"user/login",
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.post("/auth/login/", userData)
			toast.success("successfully logged in")
			return response.data
		} catch (error) {
			console.log(error)
			toast.error("invalid credentials!")
			return rejectWithValue(error.response?.data.detail)
		}
	}
)


export const refresh = createAsyncThunk(
    "user/refresh",
    async (_,{ rejectWithValue }) => {
        try {
            const response = await axiosPrivate.post("auth/token/refresh/")
            return response.data
        } catch (error) {
			console.log(error)
            return rejectWithValue(error.response?.data.detail)
        }
    }
)