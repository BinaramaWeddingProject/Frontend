// store.ts

import { configureStore } from "@reduxjs/toolkit";
import { vendorAPI } from "./api/vendor.ts";
import { VenueAPI } from "./api/venue.ts";
import { wishlistAPI } from "./api/wishlist.ts";
import {userAPI } from "./api/user.ts";
import { adminAPI } from "./api/admin.ts";
import { blogAPI } from "./api/blog.ts";

export const store = configureStore({
  reducer: {
    [vendorAPI.reducerPath]: vendorAPI.reducer,
    [VenueAPI.reducerPath]: VenueAPI.reducer,
    [wishlistAPI.reducerPath]: wishlistAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [adminAPI.reducerPath]: adminAPI.reducer,
    [blogAPI.reducerPath]:blogAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vendorAPI.middleware , VenueAPI.middleware, wishlistAPI.middleware, userAPI.middleware, adminAPI.middleware, blogAPI.middleware),
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;