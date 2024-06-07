import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Blog } from "../../types/types";
import { BlogResponse } from "../../types/api-types";

export const blogAPI = createApi({
  reducerPath: "blogAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/v1/blog/',
  }),
  endpoints: (builder) => ({
    getBlogById: builder.query<BlogResponse, string>({
      query: (blogId) => ({
        url: `${blogId}`,
        method: "GET",
      }),
    }),
    getAllBlogs: builder.query<BlogResponse, string>({
      query: () => "all/blog"
    }),
    addBlog: builder.mutation<BlogResponse, FormData>({
      query: (blogFormData) => ({
        url: '/add',
        method: 'POST',
        body: blogFormData,
      }),
    }),
  }),
});

export const { useGetBlogByIdQuery, useGetAllBlogsQuery, useAddBlogMutation } = blogAPI;
