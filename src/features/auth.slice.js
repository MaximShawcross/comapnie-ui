import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const apiUrl = 'http://127.0.0.1:5000';

// registerUser thunk 
export const registerUser = createAsyncThunk(
	'auth/register',
	async ({ email, password, first_name, last_name, nick_name, description, phone_number, position  }, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			}
			
			await axios.post(
				`${apiUrl}/users/create`,
				{ email, password, first_name, last_name, nick_name, description, phone_number, position },
				config
			)
			
		} catch (error) {
			// return custom error message from backend if present
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
);

const initialState = {
	loading: false,
	userInfo: null,
	userToken: null,
	error: null,
	success: false,
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		userRegisterReset: (state) => {
			state.success = false;
		}
	},
	extraReducers: (builder) => {
		builder
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
		.addDefaultCase((state, action) => {})
	}		
});

export const { userRegisterReset } = authSlice.actions;
export default authSlice.reducer;
