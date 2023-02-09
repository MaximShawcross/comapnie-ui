import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const adminCompanyAdapter = createEntityAdapter();

const initialState = adminCompanyAdapter.getInitialState({
	admCompanies: null
});

export const adminCompanySlice = createSlice({
	name: "adminCompany",
	initialState,
	reducers: {
		setAdminComapnyList: (state, { payload }) => {
			adminCompanyAdapter.setAll(state, payload);
		},

	}
});

export const { setAdminComapnyList } = adminCompanySlice.actions;
export const { selectById, selectIds } = adminCompanyAdapter.getSelectors(state => state.adminCompany)

export default adminCompanySlice.reducer;