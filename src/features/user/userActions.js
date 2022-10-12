import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { axiosPrivate } from "../../api/axiosInstance"

export const register = createAsyncThunk(
	"user/register",
	async (userData, { rejectWithValue }) => {
		try {
			await axiosPrivate.post("/user/register/", userData)
			toast.success("successfully registered")
		} catch (error) {
			console.log(error)
			toast.error("registration failed")
			return rejectWithValue(error.response?.data.message)
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
			toast.error("invalid credentials!")
			return rejectWithValue(error.response?.data.detail)
		}
	}
)

export const refresh = createAsyncThunk(
	"user/refresh",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.post("auth/token/refresh/")
			return response.data
		} catch (error) {
			return rejectWithValue(error.response?.data.detail)
		}
	}
)

export const logout = createAsyncThunk(
	"user/logout",
	async (_, { rejectWithValue }) => {
		try {
			await axiosPrivate.post("/auth/logout/")
		} catch (error) {
			return rejectWithValue(error.response?.data.detail)
		}
	}
)
