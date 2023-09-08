import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const productAPI = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8800/api"}),
    endpoints: (build) => ({
        fetchAllProducts: build.query({
            query: (query = '') => ({
                url: `/products${query}`
            }),
        })
    })
});

export const { useFetchAllProductsQuery } = productAPI;