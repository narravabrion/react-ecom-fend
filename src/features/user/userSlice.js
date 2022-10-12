import { createSlice } from "@reduxjs/toolkit"
import { login, register, refresh, logout } from "./userActions"

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
			.addCase(register.pending, (state) => {
				state.loading = true
			})
			.addCase(register.fulfilled, (state) => {
				state.loading = false
			})
			.addCase(register.rejected, (state, action) => {
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
			// refresh token
			.addCase(refresh.pending, (state) => {
				state.loading = true
			})
			.addCase(refresh.fulfilled, (state, action) => {
				;(state.loading = false), (state.accessToken = action.payload.access)
			})
			.addCase(refresh.rejected, (state, action) => {
				;(state.loading = false), (state.errors = action.payload)
			})
			// logout user
			.addCase(logout.pending, (state) => {
				state.loading = true
			})
			.addCase(logout.fulfilled, (state) => {
				;(state.loading = false), (state.accessToken = null)
			})
			.addCase(logout.rejected, (state, action) => {
				;(state.loading = false), (state.errors = action.payload)
			})
	},
})

export const { setCredentials } = userSlice.actions

export default userSlice.reducer
