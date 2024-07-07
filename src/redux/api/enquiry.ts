import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const server = import.meta.env.VITE_API_Server;
console.log(server)

import { Enquiry } from '../../types/types';
import { EnquiryResponse } from '../../types/api-types';

export const enquiryAPI = createApi({
  reducerPath: 'enquiryAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}/api/v1/enquiry/`,
  }),
  endpoints: (builder) => ({
    submitEnquiry: builder.mutation<EnquiryResponse, Enquiry>({
      query: (formdata) => ({
        url: 'submit',
        method: 'POST',
        body: formdata,
      }),
    }),
  }),
});

export const { useSubmitEnquiryMutation } = enquiryAPI;
