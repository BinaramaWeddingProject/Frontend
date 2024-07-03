import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AllVenuesResponse, MessageResponse, VenueResponse, LoggdInVenueResponse , AllTopVenueResponse } from "../../types/api-types";
import { Venue } from "../../types/types";

// Ensure VITE_API_Server is properly defined in your environment
const server = import.meta.env.VITE_API_Server;

export const VenueAPI = createApi({
  reducerPath: "venueAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}/api/v1/venue/`,
  }),
  tagTypes: ["venues"],

  endpoints: (builder) => ({
    allVenue: builder.query<AllVenuesResponse, Record<string, string>>({
      query: (filters) => {
        const queryString = new URLSearchParams(filters).toString();
        return `all?${queryString}`;
      },
      providesTags: ["venues"],
    }),

    signupVenue: builder.mutation<MessageResponse, Venue>({
      query: (venue) => ({
        url: "register",
        method: "POST",
        body: venue,
      }),
      invalidatesTags: ["venues"],
    }),

    loginVenue: builder.mutation<LoggdInVenueResponse, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: "login",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["venues"],
    }),

    getVenueById: builder.query<VenueResponse, string>({
      query: (id) => `${id}`,
      providesTags: ["venues"],
    }),

    updateVenue: builder.mutation<MessageResponse, { id: string; venue: FormData }>({
      query: ({ id, venue }) => ({
        url: `${id}`,
        method: "PUT",
        body: venue,
      }),
      invalidatesTags: ["venues"],
    }),

    deleteVenueById: builder.mutation<MessageResponse, { id: string; user: string }>({
      query: ({ id, user }) => ({
        url: `${id}`,
        method: "DELETE",
        body: { user }, // wrap user in an object
      }),
      invalidatesTags: ["venues"],
    }),

    rankedVenues: builder.query<AllTopVenueResponse, void>({
      query: () => ({
        url: "ranked/venues",
        method: "GET",
      }),
      providesTags: ["venues"],
    }),
  }),
});

export const {
  useAllVenueQuery,
  useSignupVenueMutation,
  useLoginVenueMutation,
  useGetVenueByIdQuery,
  useUpdateVenueMutation,
  useDeleteVenueByIdMutation,
  useRankedVenuesQuery,
} = VenueAPI;