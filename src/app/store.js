import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth.slice';
import { companyApi } from '../features/company-api.service';
import companyReducer from '../features/company/company.slice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		company: companyReducer,
		[companyApi.reducerPath]: companyApi.reducer 
	},
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(companyApi.middleware)
});
