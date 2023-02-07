import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { apiUrl } from "./auth.slice"

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
			);
			
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