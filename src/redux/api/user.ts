import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../types/types";
import { UserResponse } from "../../types/api-types";

const server = import.meta.env.VITE_API_Server;
export const userAPI =  createApi({
    reducerPath: "userAPI",
    baseQuery : fetchBaseQuery({
        baseUrl: `${server}/api/v1/user/`,
    }),
    tagTypes: ["user"],

    endpoints: (builder) =>({

        signup: builder.mutation<UserResponse, User>({
            query: (User) => ({
              url: "register",
              method: "POST",
              body: User,
            }),
            invalidatesTags: ["user"],
          }),
      
          loginUser: builder.mutation<UserResponse, { email: string; password: string }>({
            query: ({ email, password }) => ({
              url: "login",
              method: "POST",
              body: { email, password },
            }),
            invalidatesTags: ["user"],
          }),

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

    })
})

export const {useGetUserQuery,useUpdateUserMutation , useLoginUserMutation , useSignupMutation}= userAPI



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