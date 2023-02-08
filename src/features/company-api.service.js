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
		}),
		updateCompany: builder.mutation({
			query: ({ id, ...company }) => ({
				url: `companies/${id}`,
				method: 'PATCH',
				body: company
			}),
		}),
		createCompany: builder.mutation({
			query: ({...company}) => ({
				url: `companies/create`,
				method: "POST",
				body: company
			})
		}),
		
		// users features
		getUsersList: builder.query({
			query: () => ({
				url: "users/find",
				method: "GET"
			})
		}),
		updateUser: builder.mutation({
			query: ({ id, ...user }) => ({
				url: `users/admin/edit-user/${id}`,
				method: 'PATCH',
				body: user
			}),
		}),

		// admin feature
		getEveryCompanies: builder.query({
			query: () => ({
				url: "companies/admin",
				method: "GET"
			})
		}),
		updateAdminCompany: builder.mutation({
			query: ({id, ...company}) => ({
				url: `/companies/admin/${id}`,
				method: "PATCH",
				body: company
			})
		})
	}),

})

export const { 
	useGetUserQuery, useGetCompaniesQuery, 
	useUpdateCompanyMutation, useCreateCompanyMutation, 
	useGetUsersListQuery, useUpdateUserMutation, useGetEveryCompaniesQuery,
	useUpdateAdminCompanyMutation 
} = companyApi;
