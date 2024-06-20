import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AllVenuesResponse , MessageResponse,VenueResponse} from "../../types/api-types";
import { Venue  } from "../../types/types";

const server = import.meta.env.VITE_API_Server;

export const VenueAPI = createApi({
    reducerPath: "venueAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: `${server}/api/v1/venue/`,
      }),
    tagTypes: ["venues"],

    endpoints: (builder) =>({
        allVenue: builder.query<AllVenuesResponse , string>({
            
            query: (filters) => {
              const queryString = new URLSearchParams(filters).toString();
              return `all?${queryString}`;
            },
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
        
        getVenueById: builder.query<VenueResponse, string>({
            query: (id: string | undefined) => `${id}`,
            providesTags: ["venues"],
      
          }),

          updateVenue: builder.mutation<MessageResponse, { id: string, venue: Venue }>({
            query: ({ id, venue }) => ({
              url: `${id}`, 
              method: "PUT",
              body: venue,
            }),
            invalidatesTags: ["venues"],
          }),

          deleteVenueById: builder.mutation<VenueResponse, string>({
            query: (id: string | undefined) => ({
              url:`${id}`,
              method: 'DELETE'
            })
          }),
        

          rankedVenues: builder.query<AllVenuesResponse, void>({
            query: () => ({
              url: `/ranked/venues`,
              method: 'GET',
            }),
            providesTags: ["venues"], // Assuming it provides tags like other endpoints
          }),


    }),

    
})

// Export the hook from the vendorAPI object
export const {useAllVenueQuery , useSignupVenueMutation, useLoginVenueMutation, useGetVenueByIdQuery, useUpdateVenueMutation, useDeleteVenueByIdMutation,useRankedVenuesQuery} = VenueAPI;