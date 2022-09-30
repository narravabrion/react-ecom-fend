import { createSlice } from "@reduxjs/toolkit"
import { login, registerUser, refresh } from "./userActions"

// const accessToken = localStorage.getItem("access")
// 	? localStorage.getItem("access")
// 	: null

const initialState = {
	userInfo: {},
	loading: false,
	errors: null,
	accessToken: null,
	success: false,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// register user
			.addCase(registerUser.pending, (state) => {
				state.loading = true
			})
			.addCase(registerUser.fulfilled, (state ) => {
				state.loading = false
			})
			.addCase(registerUser.rejected, (state, action) => {
				;(state.loading = false), (state.errors = action.payload)
			})
			// login user
			.addCase(login.pending, (state) => {
				state.loading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				;(state.loading = false), (state.accessToken = action.payload.access)
			})
			.addCase(login.rejected, (state, action) => {
				;(state.loading = false), (state.errors = action.payload)
			})
			.addCase(refresh.pending, (state) => {
				state.loading = true
			})
			.addCase(refresh.fulfilled, (state, action) => {
				;(state.loading = false), (state.accessToken = action.payload.access)
			})
			.addCase(refresh.rejected, (state, action) => {
				;(state.loading = false), (state.errors = action.payload)
			})
	},
})

export default userSlice.reducer
