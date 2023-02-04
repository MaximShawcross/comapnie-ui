import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "./auth.slice";

export const loginUser = createAsyncThunk(
	"auth/login",
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				}
			}		
			
			const { data } = await axios.post(
				`${apiUrl}/auth/login`,
				{ username: email, password },
				config
			);

			// store user's token in local storage
			localStorage.setItem('userToken', data.userToken)
      	
			return data	

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
