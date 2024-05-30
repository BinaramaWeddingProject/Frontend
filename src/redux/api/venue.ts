import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AllVenuesResponse , MessageResponse} from "../../types/api-types";
import { Venue } from "../../types/types";


export const VenueAPI = createApi({
    reducerPath: "venueAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/v1/venue/',
      }),
    tagTypes: ["venues"],

    endpoints: (builder) =>({
        allVenue: builder.query<AllVenuesResponse , string>({
            query: () => "all",
            providesTags: ["venues"]
          }),

        signupVenue: builder.mutation<MessageResponse, Venue>({
            query: (venue) => ({
            url: "register",
            method: "POST",
            body: venue,
            }),
            invalidatesTags: ["venues"], // Invalidate venues tag after signup
        }),
        
        loginVenue: builder.mutation<MessageResponse, { email: string; password: string }>({
        query: ({ email, password }) => ({
            url: "login",
            method: "POST",
            body: { email, password },
            }),
            invalidatesTags: ["venues"], // Invalidate venues tag after login
        }),
    }),

    
})

// Export the hook from the vendorAPI object
export const {useAllVenueQuery , useSignupVenueMutation, useLoginVenueMutation} = VenueAPI;