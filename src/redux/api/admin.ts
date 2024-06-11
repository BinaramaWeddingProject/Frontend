import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Admin, BodyAdmin } from "../../types/types";
import { AdminResponse } from "../../types/api-types";

export const adminAPI =  createApi({
    reducerPath: "adminAPI",
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/v1/admin/',
    }),


    endpoints: (builder) =>({

        getAdmin: builder.query<AdminResponse, string>({
            query: (adminId : string) => ({
                url: `${adminId}`,
                method:"GET",
            }),
        }),

        updateAdmin: builder.mutation<AdminResponse, {id:string, admin:BodyAdmin}>({
            query: ({id ,admin}) => ({
                url: `${id}`,
                method:"PUT",
                body: admin,
                
            }),
        }),

        getAllAdmin: builder.query<AdminResponse , void>({
            query: () => ({
                url: 'all',
                method:"GET",
            }),
        }),

        deleteAdminById: builder.mutation<void, {id:string}>({
            query: (id) => ({
                url: `${id}`,
                method:"DELETE",
            }),
        }),

        addAdmin: builder.mutation<AdminResponse , Admin>({
            query: (admin) => ({
                url: "register",
                method: "POST",
                body: admin,
            }),
        })
    })
})

export const {useGetAdminQuery, useUpdateAdminMutation, useGetAllAdminQuery, useDeleteAdminByIdMutation, useAddAdminMutation}= adminAPI
