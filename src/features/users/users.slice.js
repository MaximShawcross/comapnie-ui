import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
	users: null
})

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setUsersList: (state, { payload }) => {
			usersAdapter.setAll(state, payload);
		}
	},
	// extraReducers: {}
})

export const { setUsersList } = usersSlice.actions
export const { selectIds, selectById } = usersAdapter.getSelectors(state => state.users)

export default usersSlice.reducer;