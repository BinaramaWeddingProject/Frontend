import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RealWeddings } from "../../types/types";
import { RealWeddingsResponse } from "../../types/api-types";

const server = import.meta.env.VITE_API_Server;


export const realWeddingsAPI = createApi({
    reducerPath: "realWeddingsAPI",
    baseQuery: fetchBaseQuery({
      baseUrl: `${server}/api/v1/weddingpost/`,
    }),
    endpoints: (builder) => ({
      getRealWeddingsPostById: builder.query<RealWeddingsResponse, string>({
        query: (RealWeddingsId) => ({
          url: `${RealWeddingsId}`,
          method: "GET",
        }),
      }),
      getAllRealWeddings: builder.query<RealWeddingsResponse, void>({
        query: () => "all/realweddings"
      }),
      addRealWeddingPost: builder.mutation<RealWeddingsResponse, FormData>({
        query: (realWeddingsFormData) => ({
          url: '/add',
          method: 'POST',
          body: realWeddingsFormData,
        }),
  
        
      }),
  
      updateRealWeddingsPost: builder.mutation<RealWeddingsResponse, { id: string, realWeddingsFormData: FormData }>({
        query: ({ id, realWeddingsFormData }) => ({
          url: `/${id}`,
          method: 'PATCH',
          body: realWeddingsFormData,
        }),
      }),

      deleteRealWedding:  builder.mutation<void, string>({
        query: (id) => ({
          url:`/${id}`,
          method: 'DELETE',
      }),
      }),
    }),
  });


  export const {useGetRealWeddingsPostByIdQuery,useGetAllRealWeddingsQuery,useAddRealWeddingPostMutation,useUpdateRealWeddingsPostMutation, useDeleteRealWeddingMutation} = realWeddingsAPI;