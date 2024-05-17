
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {AllVendorsResponse , MessageResponse , VendorResponse} from "../../types/api-types.ts"
import { Vendor} from "../../types/types.ts"
import axios from "axios";

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

export const getVendor = async (id: string |undefined) =>{
    try {
      console.log("getVendor:" ,id);
        const {data}:{data:VendorResponse} = await axios.get(
          `http://localhost:8000/api/v1/vendor/${id}`
        );
        return data; 
    } catch (error) {
      console.log(error);
      return error;
      
    }
} 

// Export the hook from the vendorAPI object
export const {useAllVendorQuery , useSignupMutation} = vendorAPI;