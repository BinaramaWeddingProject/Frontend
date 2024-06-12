import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NotificationtResponse, wishlistResponse } from "../../types/api-types";

export const notificationApi = createApi({
  reducerPath: "NotificationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/notification/",
  }),

  endpoints: (builder) => ({
    addNotification: builder.mutation<
      wishlistResponse,
      { userId: string; city: string; flag: string }
>({
      query: ({ userId, city }) => ({
        url: "add",
        method: "POST",
        body: { userId, city },
      }),
    }),

    getNotification: builder.query<NotificationtResponse, { userId: string }>({
      query: ({ userId }) => ({
        url: `${userId}`,
        method: "GET",
      }),
    }),

    updateNotification: builder.mutation<
      void,
      { Id: string, status: string }
    >({
      query: ({ Id, status }) => ({
        url: `${Id}`,
        method: "PATCH",
        body: { status },
      }),
    }),

    getAllNotification: builder.query<NotificationtResponse, void>({
      query: () => ({
      url: '/all/notif',
      method:'GET'
    })
  })
  }),
});

export const {useAddNotificationMutation, useGetNotificationQuery, useUpdateNotificationMutation, useGetAllNotificationQuery} = notificationApi
