import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const companyApi = createApi({
	reducerPath: 'companyApi',
	baseQuery: fetchBaseQuery({
		baseUrl: "http://127.0.0.1:5000/",
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.userToken;
			
			if (token) {
				headers.set('Authorization', `Bearer ${token}`); 
				return headers;
			}
		},

	}),
	endpoints: (builder) => ({
		getUser: builder.query({
			query: () => ({
				url: 'users/profile',
				method: 'GET'
			}),
		}),
		getCompanies: builder.query({
			query: () => ({
				url: "companies",
				method: "GET"
			})
		})
	}),
	
})

export const { useGetUserQuery, useGetCompaniesQuery } = companyApi;
