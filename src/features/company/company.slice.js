import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	companies: null
}

export const companySlice = createSlice({
	name: "company",
	initialState,
	reducers: {
		setComapnyList: (state, { payload }) => {
			state.companies = payload;
		}
	}
});

export const { setComapnyList } = companySlice.actions
export default companySlice.reducer;