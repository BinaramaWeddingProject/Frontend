
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {AllVendorsResponse , MessageResponse} from "../../types/api-types.ts"
import { Vendor} from "../../types/types.ts"

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
    }),

    signup: builder.mutation<MessageResponse, Vendor>({
      query: (vendor) => ({
        url: "register",
        method: "POST",
        body: vendor,
      }),
      invalidatesTags: ["vendors"],
    }),


  })
});

// Export the hook from the vendorAPI object
export const {useAllVendorQuery , useSignupMutation} = vendorAPI;
