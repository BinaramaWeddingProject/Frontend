import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AllVendorsResponse,
  MessageResponse,
  VendorResponse,
} from "../../types/api-types.ts";
import { Vendor } from "../../types/types.ts";


export const vendorAPI = createApi({
  reducerPath: "vendorAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/vendor/",
  }),
  tagTypes: ["vendors","vendor"],
  endpoints: (builder) => ({
    allVendor: builder.query<AllVendorsResponse, string>({
      query: () => "all",
      providesTags: ["vendors"],
    }),

    // Define endpoint for fetching a single vendor
    getVendorById: builder.query<VendorResponse, string>({
      query: (id: string | undefined) => `${id}`,
      providesTags: ["vendors"],

    }),

    signup: builder.mutation<MessageResponse, Vendor>({
      query: (vendor) => ({
        url: "register",
        method: "POST",
        body: vendor,
      }),
      invalidatesTags: ["vendors"],
    }),

    updateVendor: builder.mutation<MessageResponse, { id: string, vendor: Vendor }>({
      query: ({ id, vendor }) => ({
        url: `${id}`, // Assuming your update route is like 'http://localhost:8000/api/v1/vendor/:id'
        method: "PUT",
        body: vendor,
      }),
      invalidatesTags: ["vendors"],
    }),

    
    getVendorByType: builder.query<VendorResponse, string>({
      query: (typeOfBusiness: string) => ({
        url: `/category/${typeOfBusiness}`, // Adjust endpoint URL as needed
      }),
      providesTags: ["vendor"],
    }),
  }),
});

// Export the hook from the vendorAPI object
export const { useAllVendorQuery, useSignupMutation, useGetVendorByIdQuery, useUpdateVendorMutation, useGetVendorByTypeQuery } =
  vendorAPI;