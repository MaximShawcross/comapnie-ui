import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const apiUrl = 'http://127.0.0.1:5000';

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
	reducers: {},
	extraReducers: {
		[registerUser.pending]: (state) => {
			state.loading = true
			state.error = null
		},
		[registerUser.fulfilled]: (state, { payload }) => {
			state.loading = false
			state.success = true // registration successful
		},
		[registerUser.rejected]: (state, { payload }) => {
			state.loading = false
			state.error = payload
		},
	}
});

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
)

export const { reducer } = authSlice;