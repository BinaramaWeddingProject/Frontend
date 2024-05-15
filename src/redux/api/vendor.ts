// vendor.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {AllVendorsResponse} from "../../types/api-types.ts"
export const vendorAPI = createApi({
  reducerPath: "vendorAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1/vendor/',
  }),
  tagTypes: ["vendors"],
  endpoints: (builder) => ({
    allVendor: builder.query<AllVendorsResponse , string>({
      query: () => "all",
      providesTags: ["vendors"]
    })
  })
});

// Export the hook from the vendorAPI object
export const {useAllVendorQuery} = vendorAPI;
