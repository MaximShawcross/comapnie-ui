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
			transformResponse: (response, meta, arg) => response.data,
			transformErrorResponse: (response, meta, arg) => response.status,
			async onQueryStarted(
				arg,
				{ dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
			) { },
			async onCacheEntryAdded(
				arg,
				{
					dispatch,
					getState,
					extra,
					requestId,
					cacheEntryRemoved,
					cacheDataLoaded,
					getCacheEntry,
				}
			) { },
		})
	}),

})

export const { useGetUserQuery, useGetCompaniesQuery, useUpdateCompanyMutation } = companyApi;
