import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth.slice';
import { companyApi } from '../features/company-api.service';
import companyReducer from '../features/company/company.slice';
import usersReducer from "../features/users/users.slice";
import adminCompaniesReducer from "../features/company/admin.company.slice";
export const store = configureStore({
	reducer: {
		auth: authReducer,
		company: companyReducer,
		users: usersReducer,
		adminCompany: adminCompaniesReducer,
		[companyApi.reducerPath]: companyApi.reducer 
	},
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(companyApi.middleware)
});
