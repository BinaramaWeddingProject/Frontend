// store.ts

import { configureStore } from "@reduxjs/toolkit";
import { vendorAPI } from "./api/vendor.ts";
import { VenueAPI } from "./api/venue.ts";

export const store = configureStore({
  reducer: {
    [vendorAPI.reducerPath]: vendorAPI.reducer,
    [VenueAPI.reducerPath]: VenueAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vendorAPI.middleware , VenueAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;