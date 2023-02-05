import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth.slice';
import { companyApi } from '../features/auth/auth.service';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[companyApi.reducerPath]: companyApi.reducer 
	},
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(companyApi.middleware)
});
