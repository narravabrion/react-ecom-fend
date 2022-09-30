// import { createAsyncThunk } from "@reduxjs/toolkit"
// import { axiosPrivate } from "../api/axiosInstance"

// const useRefreshToken = () => {
// 	// const refresh = async () => {
// 	// 	const response = await axiosPrivate.post("auth/token/refresh/")
// 	// 	// set in state
// 	// 	console.log(response.data)
// 	// 	return response.data.access
// 	// }
// 	const refresh = createAsyncThunk(
// 		"user/refresh",
// 		async ({ rejectWithValue }) => {
// 			try {
// 				const response = await axiosPrivate.post("auth/token/refresh/")
// 				return response.data.access
// 			} catch (error) {
// 				return rejectWithValue(error.response.message)
// 			}
// 		}
// 	)
// 	return refresh
// }

// export default useRefreshToken
