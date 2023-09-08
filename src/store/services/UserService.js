import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8800/api"}),
    tagTypes: ['User'],
    endpoints: (build) => ({
        getWatchListOfUser: build.query({
            query: (email) => ({
                url: `/user/${email}`
            }),
            providesTags: result => ['User']
        }),
        addToWatchList: build.mutation({
            query: (productId) => ({
                url: `/user/add-to-watch-list/${productId}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['User']
        }),
        removeFromWatchList: build.mutation({
            query: (productId) => ({
                url: `/user/remove-from-watch-list/${productId}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['User']
        }),
    })
});

export const { useAddToWatchListMutation, useRemoveFromWatchListMutation, useGetWatchListOfUserQuery } = userAPI;