import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const companyAdapter = createEntityAdapter();


const initialState = companyAdapter.getInitialState({
	companies: null
});

export const companySlice = createSlice({
	name: "company",
	initialState,
	reducers: {
		setComapnyList: (state, { payload }) => {
			companyAdapter.setAll(state, payload);
		},

	}
});

export const { setComapnyList, updateSingleCompany } = companySlice.actions;
export const { selectById, selectIds } = companyAdapter.getSelectors(state => state.company)

export default companySlice.reducer;