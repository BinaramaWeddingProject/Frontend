import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BookingResponse } from "../../types/api-types";
import { Bookings } from "../../types/types";

export const bookingAPI = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api/v1/bookings/",
  }),

  endpoints: (builder) => ({
    addBookingEnquiry: builder.mutation<
      BookingResponse,Bookings>({
      query: (booking) => ({
        url: "bookings",
        method: "POST",
        body: booking,
      }),
    }),

    getBookingByUserAndVenue: builder.query<
      BookingResponse,
      { uId: string; vId: string }
    >({
      query: ({ uId, vId }) => ({
        url: `/bookings/${vId}`,
        method: "GET",
        params: {uId}
      }),
    }),


    getBookingbyId: builder.query< BookingResponse,
    { vId: string }
  >({
    query: ({ vId }) => ({
      url: `${vId}`,
      method: "GET",
      // params: {uId}
    }),
  }),

//     getNotificationById: builder.query<NotificationtResponse, { vId: string }>({
//       query: ({ vId }) => ({
//         url: `${vId}`,
//         method: "GET",
//       }),
//     }),

//     updateNotification: builder.mutation<
//       void,
//       { nId: string, vId: string }
//     >({
//       query: ({ nId, vId }) => ({
//         url: 'update',
//         method: "PATCH",
//         body: { vId, nId },
//       }),
//     }),

//     getNotificationIdStatus: builder.query<NotificationtResponse, {nId: string, vId: string}>({
//       query: ({nId, vId}) => ({
//       url: `notif/${nId}`,
//       method:'GET',
//       params: {vId}
//     }),
//   }),

//   getAllNotificationByVId: builder.query<NotificationtResponse,{vId:string}>({
//     query: ({vId}) => ({
//       url: `notification/${vId}`,
//       method:'GET',
//   }),
//   }),

})
});

export const { useAddBookingEnquiryMutation, useGetBookingByUserAndVenueQuery, useGetBookingbyIdQuery } = bookingAPI;