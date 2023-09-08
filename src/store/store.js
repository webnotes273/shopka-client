import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {productAPI} from "./services/ProductService";
import {userAPI} from "./services/UserService";

export const store = configureStore({
    reducer: {
        [productAPI.reducerPath]: productAPI.reducer,
        [userAPI.reducerPath]: userAPI.reducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productAPI.middleware, userAPI.middleware),
});

setupListeners(store.dispatch)