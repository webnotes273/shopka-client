import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const productAPI = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL, timeout: 10000}),
    endpoints: (build) => ({
        fetchAllProducts: build.query({
            query: (query = '') => ({
                url: `/products${query}`
            }),
        })
    })
});

export const { useFetchAllProductsQuery } = productAPI;