import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from './auth.register';
import { loginUser } from './auth.login';

export const apiUrl = 'http://127.0.0.1:5000';

export const userToken = localStorage.getItem('userToken') ? 
	localStorage.getItem('userToken') : null;

const initialState = {
	loading: false,
	userInfo: null,
	userToken,
	error: null,
	success: false,
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		userRegisterReset: (state) => {
			state.success = false;
		},
		setCredentials: (state, { payload }) => {
			state.userInfo = payload;
		}
	},
	extraReducers: (builder) => {
		builder
		//register 
		.addCase(registerUser.pending, (state) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(registerUser.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.success = true; // registration successful
		})
		.addCase(registerUser.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		})
		
		//login
		.addCase(loginUser.pending, (state, { payload }) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(loginUser.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload
		}) 
		.addCase(loginUser.fulfilled, (state, {payload}) => {
			state.loading = false;
			state.userInfo = payload;
			state.userToken = payload.access_token;
		})

		.addDefaultCase((state, action) => {		})
	}		
});

export const { userRegisterReset, setCredentials } = authSlice.actions;
export default authSlice.reducer;
