import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../types/types";
import { UserResponse } from "../../types/api-types";

export const userAPI =  createApi({
    reducerPath: "userAPI",
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/v1/user/',
    }),


    endpoints: (builder) =>({

        getUser: builder.query<UserResponse, string>({
            query: (userId : string) => ({
                url: `${userId}`,
                method:"GET",
            }),
        }),

        updateUser: builder.mutation<UserResponse, {id:string, user:User}>({
            query: ({id ,user}) => ({
                url: `${id}`,
                method:"PUT",
                body: user,
            }),
        }),

        getAllUser: builder.query<UserResponse, void>({
            query: () => ({
                url: "ALL",
                method:"GET",
            }),
        }),

        deleteUser: builder.mutation<void, string>({
            query: (userId : string) => ({
                url: `${userId}`,
                method:"DELETE",
            }),
        }),
    })
})

export const {useGetUserQuery,useUpdateUserMutation, useGetAllUserQuery, useDeleteUserMutation}= userAPI



// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { User } from "../../types/types";
// import { UserResponse } from "../../types/api-types";

// export const userAPI =  createApi({
//     reducerPath: "userAPI",
//     baseQuery : fetchBaseQuery({
//         baseUrl: 'http://localhost:8000/api/v1/user/',
//     }),


//     endpoints: (builder) =>({

//         getUser: builder.query<UserResponse, string>({
//             query: (userId) => ({
//                 url: `${userId}`,
//                 method:"GET",
//             }),
//         }),
//     })
// })