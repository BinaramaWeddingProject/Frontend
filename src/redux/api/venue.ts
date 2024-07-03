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
    allVenue: builder.query<AllVenuesResponse, Record<string, string> | void>({
      query: (filters) => {
        if (filters && Object.keys(filters).length > 0) {
          const queryString = new URLSearchParams(filters).toString();
          return `all?${queryString}`;
        }
        return 'all';
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

    updateVenue: builder.mutation<MessageResponse, { id: string; venue: Venue, images: File[] }>({
      query: ({ id, venue, images }) => {
        const formData = new FormData();
        formData.append('venue', JSON.stringify(venue));
        images.forEach((image) => {
          formData.append('images', image);
        });

        return {
          url: `${id}`,
          method: "PUT",
          body: formData,
        };
      },
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