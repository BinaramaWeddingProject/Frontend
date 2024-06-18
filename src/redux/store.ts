// store.ts

import { configureStore } from "@reduxjs/toolkit";
import { vendorAPI } from "./api/vendor.ts";
import { VenueAPI } from "./api/venue.ts";
import { wishlistAPI } from "./api/wishlist.ts";
import {userAPI } from "./api/user.ts";
import userReducer from "./reducer/auth.ts";
import authReducer from "./reducer/auth.ts";


import { adminAPI } from "./api/admin.ts";
import { blogAPI } from "./api/blog.ts";
import { notificationApi } from "./api/notification.ts";

export const store = configureStore({
  reducer: {
    [vendorAPI.reducerPath]: vendorAPI.reducer,
    [VenueAPI.reducerPath]: VenueAPI.reducer,
    [wishlistAPI.reducerPath]: wishlistAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    user: userReducer,
    auth: authReducer,
    [adminAPI.reducerPath]: adminAPI.reducer,
    [blogAPI.reducerPath]:blogAPI.reducer,
    [notificationApi.reducerPath]:notificationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vendorAPI.middleware , VenueAPI.middleware, wishlistAPI.middleware, userAPI.middleware, adminAPI.middleware, blogAPI.middleware, notificationApi.middleware),
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;